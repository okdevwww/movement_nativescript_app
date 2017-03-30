import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "workout",
  templateUrl: "pages/workout/workout/workout.html",
  styleUrls: ["pages/workout/workout/workout-common.css", "pages/workout/workout/workout.css"],
  providers: []
})
export class WorkoutComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden =  true;
  }

}
