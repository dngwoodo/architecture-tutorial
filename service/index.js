export default class TodosService {
  // repository 받아서 사용하게 되면 service에 대한 mock처리가 필요가 없어진다.,
  // 왜냐하면 repository에 stub울 넣으면 되기 떄문에.
  // repository를 변경해서 사용할 수 있게 됨. - 확장성에 용이
  constructor(repository) {
    this.repository = repository;
  }

  getTodo() {
    return this.repository.getTodo();
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
