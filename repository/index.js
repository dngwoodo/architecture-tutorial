export default class TodosRepository {
  constructor() {
    this.baseURL = 'http://localhost:5000';
  }

  getTodo() {
    return fetch(`${this.baseURL}/todo`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  createTodo(newTodo) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { newTodo },
    });
  }

  deleteTodo(id) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: { id },
    });
  }

  completeTodo(id) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: { id },
    });
  }
}
