import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const handleClickDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClickComplete = (id) => {
    setTodos(todos.map((todo) => (id === todo.id ? ({ ...todo, completed: !todo.completed }) : todo)));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(({ target: { value } }) => setTitle(value))} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(({ id, title: itemTitle, completed }) => (
          <li key={id}>
            <h2>{completed ? <s>{itemTitle}</s> : itemTitle}</h2>
            <button type="button" onClick={() => handleClickDelete(id)}>Delete</button>
            <button type="button" onClick={() => handleClickComplete(id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
