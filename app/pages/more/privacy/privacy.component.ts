import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "privacy",
  templateUrl: "pages/more/privacy/privacy.html",
  styleUrls: ["pages/more/privacy/privacy-common.css", "pages/more/privacy/privacy.css"],
  providers: []
})
export class PrivacyComponent implements OnInit{
  isLoading = false;
  listLoaded = false;


  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
