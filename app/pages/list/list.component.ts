import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";


@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: []
})
export class ListComponent implements OnInit {
  pdfList = [];
  constructor() {}

  ngOnInit() {
  }
}
