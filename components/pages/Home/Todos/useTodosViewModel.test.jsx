import { renderHook, act } from '@testing-library/react-hooks';

import useTodosViewModel from './useTodosViewModel';

describe('useTodosViewModel', () => {
  const addTodo = jest.fn();
  const deleteTodo = jest.fn();
  const completeTodo = jest.fn();
  const changeTitle = jest.fn();
  const loadTodos = jest.fn();
  let todosPresenter;

  beforeEach(() => {
    todosPresenter = {
      addTodo,
      deleteTodo,
      completeTodo,
      changeTitle,
      loadTodos,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('onSubmit', () => {
    it('calls todosPresenter.addTodo', () => {
      const { result } = renderHook(() => useTodosViewModel({ todosPresenter }));

      act(() => {
        result.current.onSubmit({ preventDefault: jest.fn() });
      });

      expect(todosPresenter.addTodo).toBeCalled();
    });
  });

  describe('onClickDelete', () => {
    it('calls todosPresenter.deleteTodo', () => {
      const { result } = renderHook(() => useTodosViewModel({ todosPresenter }));

      act(() => {
        result.current.onClickDelete();
      });

      expect(todosPresenter.deleteTodo).toBeCalled();
    });
  });

  describe('onClickComplete', () => {
    it('calls todosPresenter.onClickComplete', () => {
      const { result } = renderHook(() => useTodosViewModel({ todosPresenter }));

      act(() => {
        result.current.onClickComplete();
      });

      expect(todosPresenter.completeTodo).toBeCalled();
    });
  });

  describe('onChangeTitle', () => {
    it('calls todosPresenter.deleteTodo', () => {
      const { result } = renderHook(() => useTodosViewModel({ todosPresenter }));

      act(() => {
        result.current.onChangeTitle();
      });

      expect(todosPresenter.changeTitle).toBeCalled();
    });
  });

  describe('loadTodos', () => {
    it('calls todosPresenter.loadTodos', () => {
      const { result } = renderHook(() => useTodosViewModel({ todosPresenter }));

      act(() => {
        result.current.loadTodos();
      });

      expect(todosPresenter.loadTodos).toBeCalled();
    });
  });
});
