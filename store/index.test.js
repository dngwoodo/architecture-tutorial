import { TodosStore } from '.';

describe('TodosStore', () => {
  let todosStore;
  const getTodo = jest.fn();
  const createTodo = jest.fn();
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();

  beforeEach(() => {
    todosStore = new TodosStore({
      getTodo,
      createTodo,
      deleteTodo,
      completeTodo,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads todos', async () => {
    await todosStore.loadTodo();

    expect(getTodo).toBeCalled();
  });

  it('adds todo', async () => {
    await todosStore.addTodo({ title: 'test' });

    expect(createTodo).toBeCalledWith({ title: 'test' });
    expect(getTodo).toBeCalled();
  });

  it('deletes todo', async () => {
    await todosStore.deleteTodo(100);

    expect(deleteTodo).toBeCalledWith(100);
    expect(getTodo).toBeCalled();
  });

  it('completes todo', async () => {
    await todosStore.completeTodo(100);

    expect(completeTodo).toBeCalledWith(100);
    expect(getTodo).toBeCalled();
  });
});
