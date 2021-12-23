# TODO

## 기능

1. Todo 추가
2. Todo 삭제
3. Todo 완료


## Mobx 구현 방법
1. 일반 useState처럼 component props로 mobx store를 넘겨서 관리 (X)
2. context api를 이용해서 전역 관리
   - 제한적으로 store를 만들어서 사용할 수 있다.
3. store를 singleton instance로 관리 (X)
   - 휴먼 에러를 조심해야 한다.
   - 인스턴스로 만들어서 내리게 되면 prop drilling이 일어남.


## mobx를 사용하는 목적
1. 전역 상태 관리 - 해결방법: redux
2. prop drilling - 해결방법: context
