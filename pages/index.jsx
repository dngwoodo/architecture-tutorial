import Todos from '../components/pages/Home/Todos';

import PresenterContext, { presenters } from './presenterContext';

export default function Home() {
  return (
    <PresenterContext.Provider value={presenters}>
      <Todos />
    </PresenterContext.Provider>
  );
}

// Profile
//   Basic
//     Name: ''
//     Address
//   Career
//   Additional
//   SubmitButton(disabled) <-----

// mobx, reudx, recoil(state: disabled)

// 1. 전역적으로 사용할때(redux)
// 2. 랜더링 이슈 조질 때(recoil)
