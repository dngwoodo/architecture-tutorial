import { useRef } from 'react';
import TodosStore from '../../../../store';
import TodosService from '../../../../service';
import TodosRepository from '../../../../repository';

// 리온
// 재사용성을 위한 hook에서는 useEffect를 사용하지 않는 것이 좋을 것 같다.
// 코드에는 일관성이 있어야 된다고 생각한다. 그래서 할거면 다 하는게 좋지 않을까?
// 너무 비효율적이다. <- 구조를 따르다보면 어쩔수없이 해야되는게 있다고 생각한다.

// 서비스나 레포지토리냐 ??
// 레포지토리와 서비스 둘 다 엄연히 다른 역할을 가진 계층이라서 두 계층을 합치는 것은 맞지 않음.
// 밑에 참고.

// const positions: Position[] = await positionService.getRecentlyViewedPositions();

// class PostiionService {
//   this.positionKyRepository;
//   this.positionLocalStorageRepository;
//   this.logger;

//   getRecentlyViewedPositions() {
//     try {
//       const ids = this.positionLocalStorageRepository.getRecentlyViewedPositionIds();
//       return positions = this.positionKyRepository.getPositionsByIds(ids);
//     } catch (error) {
//       this.loggger.error(error);
//     }
//   }
// }

// context로 뱃을때 테스트코드 전부 작성. 그렇죠. 아그리고 page마다 provider에 적어줘야함.
// ts로 넘어가고 typedi 테스트코드 작성
export default function useTodosViewModel() {
  const todosStoreRef = useRef(new TodosStore(new TodosService(new TodosRepository())));

  const handleSubmit = (event) => {
    event.preventDefault();
    todosStoreRef.current.addTodo({ title: todosStoreRef.current.title });
  };

  const handleClickDelete = (id) => {
    todosStoreRef.current.deleteTodo(id);
  };

  const handleClickComplete = (id) => {
    todosStoreRef.current.completeTodo(id);
  };

  const handleChangeTitle = (newTitle) => {
    todosStoreRef.current.changeTitle(newTitle);
  };

  return {
    title: todosStoreRef.current.title,
    todos: todosStoreRef.current.todos,
    onSubmit: handleSubmit,
    onClickDelete: handleClickDelete,
    onClickComplete: handleClickComplete,
    onChangeTitle: handleChangeTitle,
  };
}
