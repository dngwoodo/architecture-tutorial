import { makeAutoObservable } from 'mobx';

class TodosStore {
  constructor(todos = [], title = '') {
    // 등록시킨값을 관찰대상으로 만들어줌.
    this.newId = 100;
    this.todos = todos;
    this.title = title;

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
