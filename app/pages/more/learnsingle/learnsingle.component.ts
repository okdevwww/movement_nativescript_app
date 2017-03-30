import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "learnsingle",
  templateUrl: "pages/more/learnsingle/learnsingle.html",
  styleUrls: ["pages/more/learnsingle/learnsingle-common.css", "pages/more/learnsingle/learnsingle.css"],
  providers: []
})
export class LearnSingleComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  /// Need API call to get list of learn pages

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
