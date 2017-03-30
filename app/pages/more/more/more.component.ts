import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "more",
  templateUrl: "pages/more/more/more.html",
  styleUrls: ["pages/more/more/more-common.css", "pages/more/more/more.css"],
  providers: [] 
})
export class MoreComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  links = [
    {'name':'test'},
    {'name':'test2'},
    {'name':'test3'},
  ]
  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
