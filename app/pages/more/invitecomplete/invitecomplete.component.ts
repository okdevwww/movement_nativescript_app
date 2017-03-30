import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "list",
  templateUrl: "pages/more/invitecomplete/invitecomplete.html",
  styleUrls: ["pages/more/invitecomplete/invitecomplete-common.css", "pages/more/invitecomplete/invitecomplete.css"],
  providers: []
})
export class InviteCompleteComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
