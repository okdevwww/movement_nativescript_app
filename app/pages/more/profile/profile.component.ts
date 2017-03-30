import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "profile",
  templateUrl: "pages/more/profile/profile.html",
  styleUrls: ["pages/more/profile/profile-common.css", "pages/more/profile/profile.css"],
  providers: []
})
export class ProfileComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
