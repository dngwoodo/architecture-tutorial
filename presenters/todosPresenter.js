export default class TodosPresenter {
  constructor(todos, title, service) {
    this.todos = todos;
    this.title = title;
    this.service = service;
  }

  getTodos = () => this.todos;

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
