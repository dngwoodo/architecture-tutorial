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
* 상태관리는 Presenter 클래스를 활용하여 React에서 떼어낸다.
* 도메인, 서비스 클래스는 의존성 주입을 통해 최상위 컴포넌트(App or Page)에 할당한다.(prop drilling을 제거하고자 context이용)
* repository <-> service <-> presenter <-> container <-> UI 와 같이 상호작용한다.
  * 굳이 상태관리 라이브러리를 활용하여 레이어를 분리할 필요없이 presenter라는 클래스로 비지니스로직을 분리시킬 수 있다.
<br/>

## 해결되지 않은 부분
* 여전히 상태관리 라이브러리(mobx)에서 도메인 로직과 상태관리를 어떻게 분리시킬 것인가에 대한 문제는 남아있다.
* Service와 Repository의 역할이 분명하지 않다. Service에서 처리해야되는 로직과 Repository에서 처리해야 되는 로직을 명확하게 구분해야 될 것 같다.