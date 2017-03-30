import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "start",
  templateUrl: "pages/workout/start/start.html",
  styleUrls: ["pages/workout/start/start-common.css", "pages/workout/start/start.css"],
  providers: []
})
export class WorkoutStartComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
