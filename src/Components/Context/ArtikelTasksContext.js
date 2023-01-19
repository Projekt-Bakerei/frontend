import { createContext, useContext, useReducer } from 'react';


const ArtikelTasksContext = createContext(null);
const ArtikelTasksDispatchContext = createContext(null);



export function ArtikelTasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );


  return (
    <ArtikelTasksContext.Provider value={tasks}>
      <ArtikelTasksDispatchContext.Provider value={dispatch}>
        {children}
      </ArtikelTasksDispatchContext.Provider>
    </ArtikelTasksContext.Provider>
  );
}

export function useArtikelTasks() {
  return useContext(ArtikelTasksContext);
}

export function useArtikelTasksDispatch() {
  return useContext(ArtikelTasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        NewartikelKodu: action.id,
        NewartikelName: action.NewartikelName,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.NewartikelKodu === action.task.NewartikelKodu) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.NewartikelKodu !== action.NewartikelKodu);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { NewartikelKodu: 0, NewartikelName: 'Pide', done: true },
];