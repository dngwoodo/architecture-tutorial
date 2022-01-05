import { createContext } from 'react';
import Presenter from '../presenter';

import TodosRepository from '../repository';
import TodosService from '../service';
import TodosStore from '../store';

const todosService = new TodosService(new TodosRepository());
const todosStore = new TodosStore({
  presenter: new Presenter({ service: todosService }),
});

const stores = {
  todosStore,
};

const StoreContext = createContext(stores);

export { stores };

export default StoreContext;
