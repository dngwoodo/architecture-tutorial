```shell
npm i

npm run dev
```
```shell
npx jest --watchAll
```
<br/>

## 백엔드 코드

https://github.com/dngwoodo/todo-backend
```shell
npm i

node app.js
```
<br/>

## 프로젝트 설명
* React는 단순히 랜더링 하는 도구로 사용한다.
* 상태관리는 Mobx를 활용하여 React에서 떼어낸다.
* 도메인, 서비스 클래스는 의존성 주입을 통해 최상위 컴포넌트(App or Page)에 할당한다.(prop drilling을 제거하고자 context이용)
* repository <-> service <-> (domain <-> Mobx) <-> container <-> UI 와 같이 상호작용한다.
<br/>

## 해결되지 않은 부분
* (domain <-> Mobx) 이 부분이 해결되지 않았다. 현재 mobx가 도메인로직에 침투해 있는 상태이다.
  * superclass를 만들어서 makeAutoObserable을 constructor에서 사용해봤지만 지원하지 않는다.
  * 도메인과 store간의 관계가 끊어지지 않는다면 굳이 mobx를 사용할 필요성을 느끼지 못하겠다.
* Service와 Repository의 역할이 분명하지 않다. Service에서 처리해야되는 로직과 Repository에서 처리해야 되는 로직을 명확하게 구분해야 될 것 같다.