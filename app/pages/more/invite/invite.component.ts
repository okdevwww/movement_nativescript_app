import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "list",
  templateUrl: "pages/more/invite/invite.html",
  styleUrls: ["pages/more/invite/invite-common.css", "pages/more/invite/invite.css"],
  providers: []
})
export class InviteComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
