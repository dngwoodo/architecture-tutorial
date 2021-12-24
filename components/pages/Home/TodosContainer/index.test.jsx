import { fireEvent, screen, render } from '@testing-library/react';

import TodosStore from '../../../../store';

import TodosContainer from '.';

jest.mock('../../../../store');

describe('TodoContainer', () => {
  const changeTitle = jest.fn();
  const addTodo = jest.fn();
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();

  beforeEach(() => {
    changeTitle.mockClear();
    addTodo.mockClear();
    deleteTodo.mockClear();
    completeTodo.mockClear();

    TodosStore.mockImplementation(() => ({
      todos: [
        { id: 1, title: '아무것도 안하기', completed: false },
        { id: 2, title: '아무것도 안하기2', completed: true },
      ],
      title: 'test',
      changeTitle,
      addTodo,
      deleteTodo,
      completeTodo,
    }));
  });

  it('renders button and input', () => {
    render(<TodosContainer />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('calls changeTitle when change input', () => {
    render(<TodosContainer />);

    // 값이 동일하면 change event 발동이 안된다.
    // userEvent 라이브러리 쓰셔야 된다. userEvent.type();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'aaa' } });

    expect(changeTitle).toBeCalledWith('aaa');
  });

  it("calls addTodo when click 'Add' button", () => {
    render(<TodosContainer />);

    fireEvent.click(screen.getByText('Add'));

    expect(addTodo).toBeCalledWith({ title: 'test', completed: false });
  });

  it("calls deleteTodo when click 'Delete' button", () => {
    render(<TodosContainer />);

    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(deleteTodo).toBeCalledWith(1);
  });

  it("calls completeTodo when click 'Complete' button", () => {
    render(<TodosContainer />);

    fireEvent.click(screen.getAllByText('Complete')[0]);
    expect(completeTodo).toBeCalled();
  });
});
