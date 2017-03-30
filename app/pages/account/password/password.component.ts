import { User } from "../../../shared/user/user";
import { UserService } from "../../../shared/user/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/account/password/password.html",
  styleUrls: ["pages/account/password/password-common.css", "pages/account/password/password.css"],
})
export class PasswordComponent implements OnInit {
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

}
