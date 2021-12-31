import { useCallback } from 'react';

export default function useTodosViewModel({ todosStore }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    todosStore.addTodo();
  };

  const handleClickDelete = (id) => {
    todosStore.deleteTodo(id);
  };

  const handleClickComplete = (id) => {
    todosStore.completeTodo(id);
  };

  const handleChangeTitle = (newTitle) => {
    todosStore.changeTitle(newTitle);
  };

  const loadTodos = useCallback(() => {
    todosStore.loadTodos();
  }, [todosStore]);

  return {
    title: todosStore.title,
    todos: todosStore.todos,
    onSubmit: handleSubmit,
    onClickDelete: handleClickDelete,
    onClickComplete: handleClickComplete,
    onChangeTitle: handleChangeTitle,
    loadTodos,
  };
}
