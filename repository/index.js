export default class TodosRepository {
  constructor() {
    this.baseURL = 'http://localhost:5000';
  }

  async getTodos() {
    const data = await fetch(`${this.baseURL}/todos`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return data.json();
  }

  createTodo(newTodo) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTodo }),
    });
  }

  deleteTodo(id) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  }

  completeTodo(id) {
    return fetch(`${this.baseURL}/todo`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  }
}
