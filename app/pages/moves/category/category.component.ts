import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "category",
  templateUrl: "pages/moves/category/category.html",
  styleUrls: ["pages/moves/category/category-common.css", "pages/moves/category/category.css"],
  providers: []
})
export class MovesCategoryComponent implements OnInit{
  isLoading = false;
  listLoaded = false;

  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = false;
  }

}
