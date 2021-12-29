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

  const renderTodos = () => render(<Todos />);

  beforeEach(() => {
    useTodosViewModel.mockImplementation(() => ({
      title: given.title,
      todos: given.todos,
      onSubmit: handleSubmit,
      onClickDelete: handleClickDelete,
      onClickComplete: handleClickComplete,
      onChangeTitle: handleChangeTitle,
    }));

    handleSubmit.mockClear();
    handleClickComplete.mockClear();
    handleClickDelete.mockClear();
    handleChangeTitle.mockClear();

    given('title', () => '');
    given('todos', () => [
      {
        id: 1,
        title: 'test',
        completed: false,
      },
    ]);
  });

  it('renders button and input', () => {
    renderTodos();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('renders todo', () => {
    renderTodos();

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });

  it('listens submit event', () => {
    renderTodos();

    fireEvent.click(screen.getByText('Add'));

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('listens submit complete click event', () => {
    renderTodos();

    fireEvent.click(screen.getByText('Complete'));

    expect(handleClickComplete).toHaveBeenCalled();
  });

  it('listens submit delete click event', () => {
    renderTodos();

    fireEvent.click(screen.getByText('Delete'));

    expect(handleClickDelete).toHaveBeenCalled();
  });

  it('listens change event', () => {
    renderTodos();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });

    expect(handleChangeTitle).toBeCalledWith('test');
  });
});
