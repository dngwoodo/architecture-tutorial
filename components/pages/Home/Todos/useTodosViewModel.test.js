import { renderHook, act } from '@testing-library/react-hooks';

import useTodosViewModel from './useTodosViewModel';

jest.mock('../../../../store', () => jest.fn());

describe('useTodosViewModel', () => {
  let result;
  let todosStore;
  const addTodo = jest.fn();
  const completeTodo = jest.fn();
  const deleteTodo = jest.fn();
  const changeTitle = jest.fn();
  const loadTodos = jest.fn();

  beforeEach(() => {
    todosStore = {
      title: '',
      addTodo,
      completeTodo,
      deleteTodo,
      changeTitle,
      loadTodos,
    };

    ({ result } = renderHook(() => useTodosViewModel({ todosStore })));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('onSubmit', () => {
    it('calls addTodo', () => {
      act(() => {
        result.current.onSubmit({ preventDefault: jest.fn() });
      });

      expect(addTodo).toBeCalledTimes(1);
    });
  });

  describe('onClickDelete', () => {
    it('calls deleteTodo', () => {
      act(() => {
        result.current.onClickDelete(100);
      });

      expect(deleteTodo).toBeCalledWith(100);
    });
  });

  describe('onClickComplete', () => {
    it('calls completeTodo', () => {
      act(() => {
        result.current.onClickComplete(100);
      });

      expect(completeTodo).toBeCalledWith(100);
    });
  });

  describe('onChangeTitle', () => {
    it('calls changeTitle', () => {
      act(() => {
        result.current.onChangeTitle('test');
      });

      expect(changeTitle).toBeCalledWith('test');
    });
  });

  describe('loadTodos', () => {
    it('calls loadTodos', () => {
      act(() => {
        result.current.loadTodos();
      });

      expect(loadTodos).toBeCalledTimes(1);
    });
  });
});
