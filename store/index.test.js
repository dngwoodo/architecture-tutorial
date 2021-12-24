import TodoStore from '.';

describe('TodosStore', () => {
  it('returns initial state', () => {
    const todoStore = new TodoStore();
    expect(todoStore).toHaveProperty('newId', 100);
  });

  it('adds todo', () => {
    const todoStore = new TodoStore();

    todoStore.addTodo({ title: 'test', completed: false });

    expect(todoStore.todos).toEqual([{ id: 100, title: 'test', completed: false }]);
  });

  it('deletes todo', () => {
    const todoStore = new TodoStore([{ id: 100, title: 'test', completed: false }]);

    todoStore.deleteTodo(100);

    expect(todoStore.todos).toEqual([]);
  });

  it('completes todo', () => {
    const todoStore = new TodoStore([{ id: 100, title: 'test', completed: false }]);

    todoStore.completeTodo(100);
    expect(todoStore.todos).toEqual([{ id: 100, title: 'test', completed: true }]);

    todoStore.completeTodo(100);
    expect(todoStore.todos).toEqual([{ id: 100, title: 'test', completed: false }]);
  });
});
