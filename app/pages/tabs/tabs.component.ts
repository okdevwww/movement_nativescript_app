import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as appSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
  selector: "list",
  templateUrl: "pages/tabs/tabs.html",
  styleUrls: ["pages/tabs/tabs-common.css", "pages/tabs/tabs.css"],
  providers: []
})
export class TabsComponent implements OnInit{
  isLoading = false;
  listLoaded = false;
  constructor(private router: RouterExtensions, private page: Page) {}

  ngOnInit() {
    //this.page.actionBarHidden = true;
  }

  onNavBtnTap(){
    appSettings.remove("loggedIn");
    this.router.navigate(["/login"],{
        transition: {
            name: "slideRight",
        }
    });
  }

  openPDF(pdf:string){
    console.log(pdf);
    let titles = {
      'waste-audit':'Detailed Waste Audit'
    };
    let sources = {
      'waste-audit':'https://www.princexml.com/samples/flyer/flyer.pdf'
    }
    console.log(sources);
    appSettings.setString("pdfTitle", titles[pdf]);
    appSettings.setString("pdfSource", sources[pdf]);
    console.log(titles[pdf]);
    this.router.navigate(["/pdf"]);
  }
}
