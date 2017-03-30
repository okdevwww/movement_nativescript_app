import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "rest",
  templateUrl: "pages/moves/rest/rest.html",
  styleUrls: ["pages/moves/rest/rest-common.css", "pages/moves/rest/rest.css"],
  providers: []
})
export class RestComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
