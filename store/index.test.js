import { TodosStore } from '.';

describe('TodosStore', () => {
  let todosStore;
  beforeEach(() => {
    todosStore = new TodosStore();
  });

  it('returns initial state', () => {
    expect(todosStore).toHaveProperty('newId', 100);
  });

  it('adds todo', () => {
    todosStore.addTodo({ title: 'test', completed: false });

    expect(todosStore.todos).toEqual([{ id: 100, title: 'test', completed: false }]);
  });

  it('deletes todo', () => {
    todosStore.addTodo([{ id: 100, title: 'test', completed: false }]);

    todosStore.deleteTodo(100);

    expect(todosStore.todos).toEqual([]);
  });

  it('completes todo', () => {
    todosStore.addTodo({ id: 100, title: 'test', completed: false });

    todosStore.completeTodo(100);
    expect(todosStore.todos).toEqual([{ id: 100, title: 'test', completed: true }]);

    todosStore.completeTodo(100);
    expect(todosStore.todos).toEqual([{ id: 100, title: 'test', completed: false }]);
  });
});
