import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "mastercongrats",
  templateUrl: "pages/moves/mastercongrats/mastercongrats.html",
  styleUrls: ["pages/moves/mastercongrats/mastercongrats-common.css", "pages/moves/mastercongrats/mastercongrats.css"],
  providers: []
})
export class MovesMasterCongratsComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
