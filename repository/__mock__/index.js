export default class TodosRepository {
  constructor() {
    this.baseURL = 'http://localhost:5000';
  }

  static getTodo() {
    return {};
  }

  static createTodo() {
    return {};
  }

  // 어느영역 <-> service <-> repository
  // "url, 파라미터변경을 유지한다는 줄 알았어요."
  // "b2c프론트/백엔드"
  // "백엔드에서는 - dto로 service에서!"
  // "프론트에서는 - dto사용 x"

  // service(dto - repository에서 사용하는 값들 형식으로 변경) repository
  // next 백엔드 - dto활용중이고 b2b에서 사용하는 것처럼 똑같이 사용하고 있다.
  // next 프론트 - dto라는 단어자체를 사용해도 되는지 의문이 들어서 repo단에서 데이터를 변경해주고 있다.

  static deleteTodo() {
    return {};
  }

  static completeTodo() {
    return {};
  }
}
