import Todos from '../components/pages/Home/Todos';

import StoreContext, { stores } from './storeContext';

export default function Home() {
  return (
    <StoreContext.Provider value={stores}>
      <Todos />
    </StoreContext.Provider>
  );
}
