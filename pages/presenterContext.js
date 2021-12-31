import { createContext } from 'react';
import TodosPresenter from '../presenters/todosPresenter';
import { todosService } from '../service';

const presenters = {
  todosPresenter: new TodosPresenter([], '', todosService),
};

const PresenterContext = createContext(presenters);

export { presenters };

export default PresenterContext;
