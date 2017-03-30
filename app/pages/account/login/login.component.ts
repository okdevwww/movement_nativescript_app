import { User } from "../../../shared/user/user";
import { UserService } from "../../../shared/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/account/login/login.html",
  styleUrls: ["pages/account/login/login-common.css", "pages/account/login/login.css"],
})
export class LoginComponent implements OnInit {
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
    this.login();
  }
  login() {
    this.userService.login(this.user)
      .subscribe(
        () => {
          appSettings.setBoolean("LoggedIn", true);
          this.router.navigate(["/dashboard"])
        },
        (error) => alert("Unfortunately we could not find your account.")
      );
  }
}
