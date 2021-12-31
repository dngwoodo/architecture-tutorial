import { useState, useCallback } from 'react';

export default function useTodosViewModel({ todosPresenter }) {
  const [todos, setTodos] = useState(todosPresenter.todos);
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    todosPresenter.addTodo({ title }, setTodos);
  };

  const handleClickDelete = (id) => {
    todosPresenter.deleteTodo(id, setTodos);
  };

  const handleClickComplete = (id) => {
    todosPresenter.completeTodo(id, setTodos);
  };

  const handleChangeTitle = (newTitle) => {
    todosPresenter.changeTitle(newTitle, setTitle);
  };

  const loadTodos = useCallback(() => {
    todosPresenter.loadTodos(setTodos);
  }, [todosPresenter]);

  return {
    title,
    todos,
    onSubmit: handleSubmit,
    onClickDelete: handleClickDelete,
    onClickComplete: handleClickComplete,
    onChangeTitle: handleChangeTitle,
    loadTodos,
  };
}
