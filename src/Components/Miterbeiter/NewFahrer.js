import React, { useState, useEffect, useContext } from 'react'
import '../../App.css';
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Container } from '@mui/system'
import Typography from '@mui/joy/Typography'
import Button from '@mui/material/Button'
import { FormGroup } from '@mui/material'

import Form from 'react-bootstrap/Form'

import { useMiterbeiter } from '../Context/MiterbeiterContext'
import { useUser } from '../Context/UserContext'


import { LoadingContext } from '../Context/LoadingContext';
import Loading from '../Loading/Loading'

function NewFahrer() {
  const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
  
  const [submitted, setSubmitted] = useState(false);
  
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  )

  const { addFahrer, listFahrer } = useMiterbeiter()
  console.log('List Fahrer:', listFahrer)
  const { token } = useUser()

  console.log('User Token:', token)

  const [fahrerData, setFahrerData] = useState({
    mName: '',
    mAdres: '',
    tel: '',
    position: '',
    kenzeichen: '',
    extern: '',
  })

  const [listFahrern, setListFahrern] = useState([])

  useEffect(() => {
    setListFahrern(listFahrer)
  }, [listFahrer])

  let miterbeitern = listFahrern
  console.log('Fahrern:', miterbeitern)

  const { mName, mAdres, tel, position, extern, kenzeichen } = fahrerData

  const handleChange = (e) => {
    e.preventDefault()
    setFahrerData({ ...fahrerData, [e.target.name]: e.target.value })
  }

  console.log(fahrerData)
  

  return token ? (
    <Container maxWidth="xl" >

      <CssBaseline />
      
    {isLoading && <Loading />}

      <h1>Neu Fahrer anlegen</h1>
      <Box  className={`blur-background ${submitted ? 'blur-background-on-submit' : ''}`} sx={{ bgcolor: '#EAEDF0', maxHeight: '80%', padding: '1rem' }}>
        <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          Yeni Isci
        </Typography>
        <hr />
        <FormGroup style={{ minWidth: '70vw' }} >
          <div className="m-auto border rounded border-3">
            <div className="d-flex flex-sm-wrap justify-content-center p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="input"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Isci Ismi:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="mName"
                  placeholder="Ismi"
                  name="mName"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="d-flex flex-sm-wrap p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="mName"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Isci Adresi:
                </Form.Label>

                {/* <TextField size="lx" label='"Bei inge"'/> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="mAdres"
                  placeholder="Isci Adresi"
                  name="mAdres"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {/* Isci Adresi */}
            </div>

            <div className="d-flex flex-sm-wrap p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="tel"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Tel:
                </Form.Label>
                {/* <TextField
                     size="lx" label='"inge Taube"'
                   /> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="tel"
                  placeholder="Tel: +90 123 456 78"
                  name="tel"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="d-flex flex-sm-wrap p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="position"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Position:
                </Form.Label>
                {/* <TextField
                     size="lx" label='"Muster Straße 10"'
                   /> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="position"
                  placeholder="Position"
                  name="position"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="d-flex flex-sm-wrap p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="kenzeichen"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Kenzeichen:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="kenzeichen"
                  placeholder="kenzeichen"
                  name="kenzeichen"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="d-flex flex-sm-wrap p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="extern"
                  style={{
                    marginRight: '2rem',
                    width: '10rem',
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {bull} Extern:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="extern"
                  placeholder="extern"
                  name="extern"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <hr />
            <Button
              sx={{ margin: 3 }}
              size="md"
              variant="contained"
              color="primary"
              onClick={() => {
                addFahrer(mName, mAdres, tel, position, extern, kenzeichen)
                setSubmitted(true)
                showLoading()
                setTimeout(() => {
                  window.location.reload(false); 
                }, 5000)
              }}
            >
              Create
            </Button>
          </div>
        </FormGroup>
      </Box>
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  )
}

export default NewFahrer
