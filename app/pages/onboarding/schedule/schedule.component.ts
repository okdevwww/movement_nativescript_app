import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [],
  templateUrl: "pages/onboarding/schedule/schedule.html",
  styleUrls: ["pages/onboarding/schedule/schedule-common.css", "pages/onboarding/schedule/schedule.css"],
})
export class OnboardingScheduleComponent implements OnInit{

  ngOnInit() {
    console.log("hello");
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  constructor(private router: RouterExtensions, private page: Page) {
  }

}
