import { User } from "../../../shared/user/user";
import { UserService } from "../../../shared/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/account/register/register.html",
  styleUrls: ["pages/account/register/register-common.css", "pages/account/register/register.css"],
})
export class RegisterComponent implements OnInit {
  user: User;

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    this.user.email = "lovefaithswing@gmail.com";
    this.user.password = "qwerty";
  }
  submit() {
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }
    if (!this.user.isValidPassword()) {
      alert("Your passwords don't match.");
      return;
    }
    this.signUp();
  }
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.router.navigate([""])
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }
}
