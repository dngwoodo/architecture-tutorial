import { observer } from 'mobx-react';

import TodosStore from '../../../../store';

import Todos from '../Todos';

// UI컴포넌트는 하나도 안깨짐.
// 상태관리 컴포넌트는 깨짐.

const TodosContainer = observer(() => {
  const todosStore = new TodosStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    todosStore.addTodo({ title: todosStore.title, completed: false });
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

  return (
    <Todos
      title={todosStore.title}
      onChangeTitle={handleChangeTitle}
      todos={todosStore.todos}
      onSubmit={handleSubmit}
      onClickComplete={handleClickComplete}
      onClickDelete={handleClickDelete}
    />
  );
});

export default TodosContainer;
