import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(({ target: { value } }) => setTitle(value))} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(({ id, title: itemTitle }) => (
          <li key={id}>
            <h2>{itemTitle}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
