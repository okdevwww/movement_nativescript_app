import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "settings",
  templateUrl: "pages/workout/settings/settings.html",
  styleUrls: ["pages/workout/settings/settings-common.css", "pages/workout/settings/settings.css"],
  providers: []
})
export class WorkoutSettingsComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
