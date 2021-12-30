import { makeAutoObservable } from 'mobx';

// 이렇게 하게 되면 모킹이 제대로 되지 않는다.
// 이유는 불명. 찾지못함.
// const todosService = new TodosService(new TodosRepository());

// const store = new TodosStore(new TodosService(new TodosRepository()));

export class TodosStore {
  constructor(todosService) {
    // 등록시킨값을 관찰대상으로 만들어줌.
    this.todos = [];
    this.title = '';
    this.todosService = todosService;

    makeAutoObservable(this);
  }

  loadTodo = async () => {
    this.todos = await this.todosService.getTodo();
  };

  // action = 상태를 변경하는 메소드들
  addTodo = async (newTodo) => {
    await this.todosService.createTodo(newTodo);
    this.todos = await this.todosService.getTodo();
  };

  deleteTodo = async (id) => {
    await this.todosService.deleteTodo(id);
    this.todos = await this.todosService.getTodo();
  };

  completeTodo = async (id) => {
    await this.todosService.completeTodo(id);
    this.todos = await this.todosService.getTodo();
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
