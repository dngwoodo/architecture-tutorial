/* eslint-disable react/prop-types */
import todosStore from '../../../../store';

const Todos = () => {
  // 향로
  // mocking으로 테스트를 다 진행하다보면
  // 서로 다른 두가지를 합쳤을 떄 완전히 예상치못한 결과가 나올 수 있다.

  // container = 비지니스로직을 테스트 (전역상태로 뺴버리면 전역상태를 관리하는 함수가 호출됐는지만 봄.)
  // presentational = ui 테스트
  // 사용자의 동작를 테스트했다고 볼 수 있는건가 ?

  // 단위테스트의 한계다.
  // container/presentational 나누면 좋은 것은 어떤 것에 집중하는 지에 대해서 나눌 수 있다.
  // 진짜 사용자 동작에 대한 테스트는 e2e로 해결
  // unit테스트에서는 store 테스트를 더 신경써야 한다.

  // 원래 함수 테스트를 할 떄 인풋/아웃풋만 테스트를 한다.
  // 사용자이벤트가 들어왔을떄 출력되는 화면만 테스트를 한다.
  // redux에서 dispatch를 모킹을 하는데 애를 모킹하면 안되는거아닌가?
  // redux => mobx를 간다고 생각을 해보자.
  // dispatch 저희는 애를 다 모킹해줬다.

  // reducer에 잇는 상태로직은 따로 빼도 좋을 것 같다. <- 클래스로 뻇음.

  // 리액트 컴포넌트가 리덕스랑 비교를 했을 떄

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todosStore.title} onChange={({ target: { value } }) => handleChangeTitle(value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todosStore.todos.map(({ id, title: itemTitle, completed }) => (
          <li key={id}>
            <h2>{completed ? <s>{itemTitle}</s> : itemTitle}</h2>
            <button type="button" onClick={() => handleClickDelete(id)}>Delete</button>
            <button type="button" onClick={() => handleClickComplete(id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
