import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "progression",
  templateUrl: "pages/moves/progression/progression.html",
  styleUrls: ["pages/moves/progression/progression-common.css", "pages/moves/progression/progression.css"],
  providers: []
})
export class ProgressionComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
