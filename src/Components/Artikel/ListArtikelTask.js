import { useState } from 'react';
import { useArtikelTasks, useArtikelTasksDispatch } from '../Context/ArtikelTasksContext';

export default function ArtikelTaskList() {
  const tasks = useArtikelTasks();
  console.log("Task:", tasks)
  return (
    <ol>
      {tasks.map(task => (
        <li key={task.NewartikelKodu}>
          <Task task={task} />
        </li>
      ))}
    </ol>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useArtikelTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.NewartikelName}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                NewartikelName: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.NewartikelName}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          NewartikelKodu: task.NewartikelKodu
        });
      }}>
        Delete
      </button>
    </label>
  );
}
