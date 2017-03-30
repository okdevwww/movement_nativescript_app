import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";

@Injectable()
export class PDFListService {
  constructor() {}

  getOutreachPdfs(){
    return [
      {
        'title': 'Kitchen Caddie Sign',
        'source': 'https://www.princexml.com/howcome/2016/samples/magic8/index.pdf'
      },
      {
        'title': 'Program Announcement',
        'source': 'https://www.princexml.com/howcome/2016/samples/magic8/index.pdf'
      },
    ]
  }
}
