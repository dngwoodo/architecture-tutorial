export default class TodosPresenter {
  constructor(todos, title, service) {
    // 등록시킨값을 관찰대상으로 만들어줌.
    this.todos = todos;
    this.title = title;
    this.service = service;
  }

  getTodos = () => this.todos;

  // action = 상태를 변경하는 메소드들
  addTodo = (newTodo, update) => {
    this.todos = [...this.todos, { id: Date.now(), completed: false, ...newTodo }];
    update(this.todos);
  };

  deleteTodo = (id, update) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    update(this.todos);
  };

  completeTodo = (id, update) => {
    this.todos.find((todo) => todo.id === id).completed = true;
    this.todos = [...this.todos];
    update(this.todos);
  };

  changeTitle = (newTitle, update) => {
    this.title = newTitle;
    update(this.title);
  };

  loadTodos = async (update) => {
    this.todos = await this.service.getTodos();
    update(this.todos);
  };
}
