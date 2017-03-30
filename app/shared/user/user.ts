var validator = require("email-validator");

export class User {
  name: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  password2: string;

  isValidEmail() {
    return validator.validate(this.email);
  }
  isValidPassword(){
    return this.password == this.password2;
  }
}
