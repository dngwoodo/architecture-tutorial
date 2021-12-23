import { makeAutoObservable } from 'mobx';

class Todos {
  constructor(todos, title) {
    // 등록시킨값을 관찰대상으로 만들어줌.
    makeAutoObservable(this, {
      todos: [],
      title: '',
    });

    this.todos = todos;
    this.title = title;
  }

  // action = 상태를 변경하는 메소드들
  addTodos = (newTodo) => {
    this.todos = [...this.todos, newTodo];
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

export default Todos;
