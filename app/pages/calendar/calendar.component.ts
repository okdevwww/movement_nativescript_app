import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "calendar",
  templateUrl: "pages/calendar/calendar.html",
  styleUrls: ["pages/calendar/calendar-common.css", "pages/calendar/calendar.css"],
  providers: []
})
export class CalendarComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

}
