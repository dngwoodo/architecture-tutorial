import { makeAutoObservable } from 'mobx';

// 1. context page로 묶는다.
// 2. 전역적으로 관리되어야되는 상태들만 따로 뺸다.
// 3. 비동기 로직을 따로 뺸다.

// 4. 상태관리라이브러리를 사용하지 않는다면 테스트를 또 작성할 필요는 없다.

// 5. 근데 지금 향로가 생각하는건 이거다.
// 6. 나는 도메인 (비지니스) 영역에 라이브러리가 침투하는걸 좋아하지 않는다.
// 우리의 도메인 코드는 외부 영향을 받지 않는 형태로 유지해야만, 테스트 하기 좋고, 특정 라이브러리에 의존적이지 않은 코드가 된다고 생각한다.
// 하지만 이것도 비용이다. 선을 긋는것도 비용이기 떄문에 잘 생각해야한다.

// 아샬님의 설계를 할 떄 바텀업(모든걸 다 알고 있어야한다. 싹 다 실험한다.)
// 어떻게 보면 탑다운 ... 궁극의 탑다운 ㅋㅋㅋㅋㅋ
// 아샬님은 실험을 하신다. 절대 머리로 굴리지 않는다.

// 동의를 못하는 사람이 수두룩할 것 같다.
// React는 랜더링을 시켜주는 아이. // ui
// Redux는 상태관리를 분리할 수 있는 아이. // 중간자역할. 다른분들은 리덕스의 역할을 아샬이랑 다르게 생각한다. 전역이라는 말로 사용하지마라.
// Redux에서 도메인 로직은 또 따로 뺼 수 있다. // 상태관리 라이브러리에 종속되지 않음.
// 동의를 못하는 사람들을 반박을 할려면: 1. 테스트 코드 작성하기 쉽다. 2. 유지보수하기 쉬워요.

class TodosStore {
  constructor(todos = [], title = '') {
    this.newId = 100;
    this.todos = todos;
    this.title = title;

    // 상속이 답이 되지 않을까?
    // 등록시킨값을 관찰대상으로 만들어줌.
    makeAutoObservable(this);
  }

  // action = 상태를 변경하는 메소드들
  addTodo = (newTodo) => {
    this.todos = [...this.todos, { id: this.newId, ...newTodo }];

    // newId 해당 클래스에서 사용하는
    // private 변수이기 때문에 테스트를 작성하지 않는다.
    this.newId += 1;
  };

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  completeTodo = (id) => {
    this.todos = this.todos.map(
      (todo) => (id === todo.id ? ({ ...todo, completed: !todo.completed }) : todo),
    );
  };

  changeTitle = (newTitle) => {
    this.title = newTitle;
  };

  // computed
  get emptyTitleTodo() {
    return this.todos.filter((todo) => todo.title === '');
  }
}

const todosStore = new TodosStore();

export default todosStore;
