import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [],
  templateUrl: "pages/assessment/progression/progression.html",
  styleUrls: ["pages/assessment/progression/progression-common.css", "pages/assessment/progression/progression.css"],
})
export class AssessmentProgressionComponent implements OnInit{

  // Based on data from the api, this component will loop through a set of progressions

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  constructor(private router: RouterExtensions, private page: Page) {
  }


}
