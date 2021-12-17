import { useState } from 'react';

import Todos from '../Todos';

export default function TodosContainer() {
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
    setTodos(
      todos.map((todo) => (id === todo.id ? ({ ...todo, completed: !todo.completed }) : todo)),
    );
  };

  const handleChangeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <Todos
      title={title}
      onChangeTitle={handleChangeTitle}
      todos={todos}
      onSubmit={handleSubmit}
      onClickComplete={handleClickComplete}
      onClickDelete={handleClickDelete}
    />
  );
}
