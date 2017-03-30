import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "subscribed",
  templateUrl: "pages/more/subscribed/subscribed.html",
  styleUrls: ["pages/more/subscribed/subscribed-common.css", "pages/more/subscribed/subscribed.css"],
  providers: []
})
export class SubscribedComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
