import { makeAutoObservable } from 'mobx';

// 의존성 주입을 하지 않고 이렇게 하게 되면 모킹이 제대로 되지 않는다. 이유를 찾지 못함.
// const todosService = new TodosService(new TodosRepository());

export default class TodosStore {
  constructor({ presenter }) {
    this.todos = [];
    this.title = '';
    this.presenter = presenter;

    makeAutoObservable(this);
  }

  loadTodos = async () => {
    this.todos = this.presenter.todos;
  };

  addTodo = async () => {
    this.presenter.addTodo({ title: this.title }, ({ todos, title }) => {
      this.todos = todos;
      this.title = title;
    });
  };

  deleteTodo = async (id) => {
    this.presenter.deleteTodo(id, (todos) => {
      this.todos = todos;
    });
  };

  completeTodo = async (id) => {
    this.presenter.completeTodo(id, (todos) => {
      this.todos = todos;
    });
  };

  changeTitle = (newTitle) => {
    this.presenter.changeTitle(newTitle, (title) => {
      this.title = title;
    });
  };
}
