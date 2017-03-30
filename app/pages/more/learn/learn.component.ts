import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "learn",
  templateUrl: "pages/more/learn/learn.html",
  styleUrls: ["pages/more/learn/learn-common.css", "pages/more/learn/learn.css"],
  providers: []
})
export class LearnComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  /// Need API call to get list of learn pages

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
