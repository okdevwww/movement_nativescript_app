import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "subscription",
  templateUrl: "pages/more/subscription/subscription.html",
  styleUrls: ["pages/more/subscription/subscription-common.css", "pages/more/subscription/subscription.css"],
  providers: []
})
export class SubscriptionComponent implements OnInit{
  isLoading = false;
  listLoaded = false;


  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
