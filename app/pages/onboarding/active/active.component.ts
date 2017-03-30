import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [],
  templateUrl: "pages/onboarding/active/active.html",
  styleUrls: ["pages/onboarding/active/active-common.css", "pages/onboarding/active/active.css"],
})
export class OnboardingActiveComponent implements OnInit{

  ngOnInit() {
    console.log("hello");
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  constructor(private router: RouterExtensions, private page: Page) {
  }

}
