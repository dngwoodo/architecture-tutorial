import {
  fireEvent, screen, render,
} from '@testing-library/react';
import given from 'given2';

import Todos from '.';
import useTodosViewModel from './useTodosViewModel';

jest.mock('./useTodosViewModel', () => jest.fn());

describe('Todos', () => {
  const handleSubmit = jest.fn((event) => event.preventDefault());
  const handleClickComplete = jest.fn();
  const handleClickDelete = jest.fn();
  const handleChangeTitle = jest.fn();
  const loadTodos = jest.fn();

  beforeEach(() => {
    useTodosViewModel.mockImplementation(() => ({
      title: given.title,
      todos: given.todos,
      onSubmit: handleSubmit,
      onClickDelete: handleClickDelete,
      onClickComplete: handleClickComplete,
      onChangeTitle: handleChangeTitle,
      loadTodos,
    }));

    given('title', () => '');
    given('todos', () => [
      {
        id: 1,
        title: 'test',
        completed: false,
      },
    ]);

    render(<Todos />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders button and input', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('renders todos', () => {
    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });

  it('calls loadTodos', () => {
    expect(loadTodos).toBeCalledTimes(1);
  });

  it('listens submit event', () => {
    fireEvent.click(screen.getByText('Add'));

    expect(handleSubmit).toBeCalled();
  });

  it('listens complete click event', () => {
    fireEvent.click(screen.getByText('Complete'));

    expect(handleClickComplete).toBeCalled();
  });

  it('listens delete click event', () => {
    fireEvent.click(screen.getByText('Delete'));

    expect(handleClickDelete).toBeCalled();
  });

  it('listens change event', () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });

    expect(handleChangeTitle).toBeCalledWith('test');
  });
});
