import TodosRepository from '../repository';

export default class TodosService {
  constructor(repository) {
    this.repository = repository;
  }

  getTodos() {
    return this.repository.getTodos();
  }

  createTodo(newTodo) {
    return this.repository.createTodo(newTodo);
  }

  deleteTodo(id) {
    return this.repository.deleteTodo(id);
  }

  completeTodo(id) {
    return this.repository.completeTodo(id);
  }
}

const todosService = new TodosService(new TodosRepository());

export { todosService };
