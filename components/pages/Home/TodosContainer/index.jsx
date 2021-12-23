import { useState } from 'react';

import Todos from '../Todos';

// UI컴포넌트는 하나도 안깨짐.
// 상태관리 컴포넌트는 깨짐.

export const TodosContainer = () => {
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
};

export default TodosContainer;
