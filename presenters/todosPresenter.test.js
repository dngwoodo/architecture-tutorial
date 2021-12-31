import TodosPresenter from './todosPresenter';

describe('TodosPresenter', () => {
  const update = jest.fn();
  const getTodos = jest.fn();

  const TODOS = [
    { id: 1, title: 'xxxx', completed: false },
    { id: 2, title: 'xxxx', completed: false },
    { id: 3, title: 'xxxx', completed: false },
  ];

  let todosPresenter;

  beforeEach(() => {
    window.Date.now = jest.fn().mockReturnValue(100);

    todosPresenter = new TodosPresenter(TODOS, '', { getTodos });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('return todos', () => {
    expect(todosPresenter.getTodos()).toEqual(TODOS);
  });

  it('adds todo', () => {
    todosPresenter.addTodo({ title: '아무것도 안하기' }, update);

    expect(todosPresenter.todos).toEqual([...TODOS, { title: '아무것도 안하기', id: 100, completed: false }]);
    expect(update).toBeCalledTimes(1);
    expect(update).toBeCalledWith(todosPresenter.todos);
  });

  it('deletes todo', () => {
    todosPresenter.deleteTodo(1, update);

    expect(todosPresenter.todos[0].id).not.toBe(1);
    expect(update).toBeCalledTimes(1);
    expect(update).toBeCalledWith(todosPresenter.todos);
  });

  it('completes todo', () => {
    todosPresenter.completeTodo(1, update);

    expect(todosPresenter.todos[0].completed).toBe(true);
    expect(update).toBeCalledTimes(1);
    expect(update).toBeCalledWith(todosPresenter.todos);
  });

  it('loads todo', async () => {
    await todosPresenter.loadTodos(update);

    expect(getTodos).toBeCalled();
    expect(update).toBeCalledTimes(1);
    expect(update).toBeCalledWith(todosPresenter.todos);
  });
});
