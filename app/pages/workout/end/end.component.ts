import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "end",
  templateUrl: "pages/workout/end/end.html",
  styleUrls: ["pages/workout/end/end-common.css", "pages/workout/end/end.css"],
  providers: []
})
export class WorkoutEndComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
