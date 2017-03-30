import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { SwipeGestureEventData } from "ui/gestures";
import * as appSettings from "application-settings";

@Component({
  selector: "my-app",
  providers: [],
  templateUrl: "pages/intro/intro.html",
  styleUrls: ["pages/intro/intro-common.css", "pages/intro/intro.css"],
})
export class IntroComponent implements OnInit{

  //This should move to service
  content = [
    {'photo':"this is photo 1", 'text': 'This is text 1'},
    {'photo':"this is photo 2", 'text': 'This is text 2'},
    {'photo':"this is photo 3", 'text': 'This is text 3'},
  ]

  pageIndex = 0;
  photoUrl = this.content[this.pageIndex]['photo'];
  displayText = this.content[this.pageIndex]['text'];

  ngOnInit() {
    console.log("hello");
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    let loggedIn = appSettings.getBoolean("LoggedIn", false);
    console.log(loggedIn);
    if(loggedIn){
      this.router.navigate(["/dashboard"],{
        animated:false,
      });
    }
  }

  constructor(private router: RouterExtensions, private page: Page) {
  }

  onSwipe(args: SwipeGestureEventData) {
   if (args.direction == 1){ // right or back
     this.pageIndex = this.pageIndex != 0 ? this.pageIndex - 1 : this.pageIndex;
   } else if(args.direction == 2) { //left or next
     this.pageIndex = this.pageIndex != 2 ? this.pageIndex + 1 : this.pageIndex;
   }
   console.log("Swipe Direction: " + args.direction);
   this.photoUrl = this.content[this.pageIndex]['photo'];
   this.displayText = this.content[this.pageIndex]['text'];
  }

}
