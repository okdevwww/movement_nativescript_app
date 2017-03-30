import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "moves",
  templateUrl: "pages/moves/moves/moves.html",
  styleUrls: ["pages/moves/moves/moves-common.css", "pages/moves/moves/moves.css"],
  providers: []
})
export class MovesComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
