export default class Presenter {
  constructor({ service }) {
    this.todos = [];
    this.title = '';
    this.service = service;
  }

  addTodo = async (todo, updater) => {
    await this.service.createTodo(todo);
    this.todos = await this.service.getTodos();
    this.title = '';
    updater({ title: this.title, todos: this.todos });
  };

  deleteTodo = async (id, updater) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    updater(this.todos);
  };

  completeTodo = async (id, updater) => {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? true : todo.completed,
    }));
    updater(this.todos);
  };

  changeTitle = (newTitle, updater) => {
    this.title = newTitle;
    updater(this.title);
  };
}
