export class LoginErrors {
  code: number;
  msg: string;
  constructor(code: number, msg: string) {
    this.code = code;
    this.msg = msg;
    console.log(this.code, this.msg);
  }
}
const obj = new LoginErrors(200, "sdfsdjfhgdf");
