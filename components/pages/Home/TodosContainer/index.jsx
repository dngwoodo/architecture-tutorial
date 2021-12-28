import { observer } from 'mobx-react';

import todosStore from '../../../../store';

import Todos from '../Todos';

// UI컴포넌트는 하나도 안깨짐.
// 상태관리 컴포넌트는 깨짐.

// container와 HOOK의 차이
// container UI컴포넌트를 재사용성있게 구성하기 위해서.
// HOOK을 사용하는 이유는 반복적인 로직을 빼기 위해서.
// HOOK으로 컨테이너 역할 수행해도 상관은없지만 UI컴포넌트를 재사용성있게 만들려면 CONTAINER와 결합해서 사용하는게 좋다.

const TodosContainer = observer(() => {
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
