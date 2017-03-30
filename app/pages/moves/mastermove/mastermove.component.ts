import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "mastermove",
  templateUrl: "pages/moves/mastermove/mastermove.html",
  styleUrls: ["pages/moves/mastermove/mastermove-common.css", "pages/moves/mastermove/mastermove.css"],
  providers: []
})
export class MovesMasterComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
