import { observer } from 'mobx-react';

import TodosStore from '../../../../store';

import Todos from '../Todos';

// UI컴포넌트는 하나도 안깨짐.
// 상태관리 컴포넌트는 깨짐.

// 3줄 정리
// container 컴포넌트를 쓰는 이유는 presentational 컴포넌트를 재사용성있게 만들기 위해서.
// hook을 쓰는 본래목적은 반복되는 로직을 뺴기 위해서.
// hook으로 container역할을 할 순 있지만 presentational 컴포넌트는 재사용성이 없다.

// 1줄 정리
// Presentational component는 hook에는 의존적이고, Container component에는 의존적이지 않다.

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
