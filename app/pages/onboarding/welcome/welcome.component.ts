import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [],
  templateUrl: "pages/onboarding/welcome/welcome.html",
  styleUrls: ["pages/onboarding/welcome/welcome-common.css", "pages/onboarding/welcome/welcome.css"],
})
export class OnboardingWelcomeComponent implements OnInit{

  ngOnInit() {
    console.log("hello");
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  constructor(private router: RouterExtensions, private page: Page) {
  }

}
