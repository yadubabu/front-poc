export class LoginValidators {
  code: number;
  msg: string;
  constructor(code: number, msg: string) {
    this.code = code;
    this.msg = msg;
    console.log(this.code, this.msg);
  }
}
