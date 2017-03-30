import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import 'nativescript-pdf-view';
import * as SocialShare from "nativescript-social-share";
import * as appSettings from "application-settings";

@Component({
  selector: "pdf",
  template: `
  <StackLayout>
  <ActionBar title="Groceries">
    <ActionItem  text="Share" (tap)="share()" android.systemIcon="ic_menu_share_holo_dark" ios.systemIcon="9" ios.position="right"></ActionItem>
  </ActionBar>
    <TextField editable="false" class="pdf-header" text="{{title}}" col="0"></TextField>
    <ActivityIndicator [busy]="isLoading" [visibility]="isLoading ? 'visible' : 'collapse'" row="1" horizontalAlignment="center" verticalAlignment="center"></ActivityIndicator>
    <PDFView src="{{src}}" (load)="onLoad()" ></PDFView>
  </StackLayout>
  `,
  styles: [`
    .pdf-header{
      font-size:18;
      text-align:center;
    }
    `],
  providers: []
})
export class PDFComponent implements OnInit{
  isLoading = true;
  src = '';
  title = '';

  ngOnInit(){
    this.src = appSettings.getString("pdfSource", "");
    this.title = appSettings.getString("pdfTitle", "");
    console.log(this.src);
    console.log(this.title);
  }

  constructor() {
  }

  onLoad(){
    this.isLoading = false;
  }

  share() {
    SocialShare.shareText(this.src);
  }

}
