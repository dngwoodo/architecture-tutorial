import { renderHook, act } from '@testing-library/react-hooks';

import todosStore from '../../../../store';
import useTodosViewModel from './useTodosViewModel';

jest.mock('../../../../store', () => jest.fn());

describe('useTodosViewModel', () => {
  let hook;
  todosStore.title = '123';
  todosStore.addTodo = jest.fn();
  todosStore.completeTodo = jest.fn();
  todosStore.deleteTodo = jest.fn();
  todosStore.changeTitle = jest.fn();

  beforeEach(() => {
    hook = renderHook(() => useTodosViewModel());

    todosStore.addTodo.mockClear();
    todosStore.completeTodo.mockClear();
    todosStore.deleteTodo.mockClear();
    todosStore.changeTitle.mockClear();
  });

  describe('onSubmit', () => {
    it('calls addTodo', () => {
      const { result } = hook;
      act(() => {
        result.current.onSubmit({ preventDefault: jest.fn() });
      });

      expect(todosStore.addTodo).toBeCalledWith({ title: '123', completed: false });
    });
  });

  describe('onClickDelete', () => {
    it('calls deleteTodo', () => {
      const { result } = hook;
      const targetId = 100;
      act(() => {
        result.current.onClickDelete(targetId);
      });

      expect(todosStore.deleteTodo).toBeCalledWith(targetId);
    });
  });

  describe('onClickComplete', () => {
    it('calls completeTodo', () => {
      const { result } = hook;
      const targetId = 100;
      act(() => {
        result.current.onClickComplete(targetId);
      });

      expect(todosStore.completeTodo).toBeCalledWith(targetId);
    });
  });

  describe('onChangeTitle', () => {
    it('calls changeTitle', () => {
      act(() => {
        hook.result.current.onChangeTitle('test');
      });

      expect(todosStore.changeTitle).toBeCalledWith('test');
    });
  });
});
