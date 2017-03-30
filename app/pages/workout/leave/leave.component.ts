import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "leave",
  templateUrl: "pages/workout/leave/leave.html",
  styleUrls: ["pages/workout/leave/leave-common.css", "pages/workout/leave/leave.css"],
  providers: []
})
export class WorkoutLeaveComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
