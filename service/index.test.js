import TodosService from '.';
import TodosRepository from '../repository';

jest.mock('../repository');

describe('TodosService', () => {
  it('calls repository\'s getTodos', () => {
    const stubTodosRepository = new TodosRepository();
    const todosService = new TodosService(stubTodosRepository);

    todosService.getTodos();

    expect(stubTodosRepository.getTodos).toBeCalledWith();
  });

  it('calls repository\'s creatTodo', () => {
    const stubTodosRepository = new TodosRepository();
    const todosService = new TodosService(stubTodosRepository);
    const newTodo = { id: 100, title: '123', compeleted: false };

    todosService.createTodo(newTodo);

    expect(stubTodosRepository.createTodo).toBeCalledWith(newTodo);
  });

  it('calls repository\'s deleteTodo', () => {
    const stubTodosRepository = new TodosRepository();
    const todosService = new TodosService(stubTodosRepository);
    const targetId = 100;

    todosService.deleteTodo(targetId);

    expect(stubTodosRepository.deleteTodo).toBeCalledWith(targetId);
  });

  it('calls repository\'s completeTodo', () => {
    const stubTodosRepository = new TodosRepository();
    const todosService = new TodosService(stubTodosRepository);
    const targetId = 100;

    todosService.completeTodo(targetId);

    expect(stubTodosRepository.completeTodo).toBeCalledWith(targetId);
  });
});
