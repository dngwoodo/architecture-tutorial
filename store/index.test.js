import TodosStore from '.';

describe('TodosStore', () => {
  let todosStore;
  const getTodos = jest.fn();
  const createTodo = jest.fn();
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();

  beforeEach(() => {
    todosStore = new TodosStore({
      getTodos,
      createTodo,
      deleteTodo,
      completeTodo,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads todos', async () => {
    await todosStore.loadTodos();

    expect(getTodos).toBeCalled();
  });

  it('adds todo', async () => {
    await todosStore.addTodo();

    expect(createTodo).toBeCalledWith({ title: todosStore.title });
    expect(getTodos).toBeCalled();
  });

  it('deletes todo', async () => {
    await todosStore.deleteTodo(100);

    expect(deleteTodo).toBeCalledWith(100);
    expect(getTodos).toBeCalled();
  });

  it('completes todo', async () => {
    await todosStore.completeTodo(100);

    expect(completeTodo).toBeCalledWith(100);
    expect(getTodos).toBeCalled();
  });
});
