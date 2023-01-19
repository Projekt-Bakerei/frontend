import { useState, useEffect } from 'react';
import { useArtikelTasksDispatch } from '../Context/ArtikelTasksContext';
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';

import { useNewArtikel } from '../Context/ArtikelContext';

export default function AddArtikelTask(task) {
  const [NewartikelName, setNewartikelName] = useState('');
  const dispatch = useArtikelTasksDispatch();
  const { listNewArtikel } = useNewArtikel();

  const [listArtikel, setListArtikel] = useState([]);
  useEffect(() => {
    setListArtikel(listNewArtikel)
   }, [listNewArtikel]);
   
   let artikel = listArtikel;
   console.log("Artikel:", artikel)

  return (
    <>
    <div className='d-flex flex-row'>
      <Form.Label
      htmlFor="input"
      style={{
        //  marginRight: "2rem",
        width: "18.5rem",
        fontFamily: "Roboto",
        fontSize: "0.875rem",
        fontWeight: 500,
      }}
      
      >
        <Form.Select 
        name="NewartikelName"
        style={{ width: "15rem", height: "3rem" }}
        value={NewartikelName}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                NewartikelName: e.target.value
              }
            });
          }}
        >
         {listArtikel.map((artikel, i) => (
                      <option name={artikel.NewartikelName} key={i}>
                        {artikel.NewartikelName}
                      </option>
                    ))}
        </Form.Select>
      </Form.Label>
      {/* <input
        placeholder="Ürün Ekle "
        value={NewartikelName}
        onChange={e => setNewartikelName(e.target.value)}
      /> */}
      <Button onClick={() => {
        setNewartikelName('');
        dispatch({
          type: 'added',
          NewartikelKodu: nextId++,
          NewartikelName: NewartikelName,
        }); 
      }}>Add</Button>
      </div>
    </>
  );
}

let nextId = 3;