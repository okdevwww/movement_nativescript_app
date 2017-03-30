import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "manage",
  templateUrl: "pages/moves/manage/manage.html",
  styleUrls: ["pages/moves/manage/manage-common.css", "pages/moves/manage/manage.css"],
  providers: []
})
export class MovesManageComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
