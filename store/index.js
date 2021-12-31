import { makeAutoObservable } from 'mobx';

// 의존성 주입을 하지 않고 이렇게 하게 되면 모킹이 제대로 되지 않는다. 이유를 찾지 못함.
// const todosService = new TodosService(new TodosRepository());

export default class TodosStore {
  constructor(todosService) {
    this.todos = [];
    this.title = '';
    this.todosService = todosService;

    makeAutoObservable(this);
  }

  loadTodos = async () => {
    this.todos = await this.todosService.getTodos();
  };

  addTodo = async () => {
    await this.todosService.createTodo({ title: this.title });
    this.todos = await this.todosService.getTodos();
  };

  deleteTodo = async (id) => {
    await this.todosService.deleteTodo(id);
    this.todos = await this.todosService.getTodos();
  };

  completeTodo = async (id) => {
    await this.todosService.completeTodo(id);
    this.todos = await this.todosService.getTodos();
  };

  changeTitle = (newTitle) => {
    this.title = newTitle;
  };
}
