import {Component, ElementRef, ViewChild} from '@angular/core';
import {Subject, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';

  private readonly postMessageListener: (v: MessageEvent) => void;
  private readonly postMessageResponse: Subject<any> = new Subject();
  displayIframe = false;

  @ViewChild('drawioIframe', {static: false})
  drawioIframe: ElementRef<HTMLIFrameElement>;

  constructor() {
    this.postMessageListener = (v: MessageEvent) => {

      this.postMessageResponse.next(JSON.parse(v.data));
    };
    this.postMessageResponse.pipe(tap(console.log)).subscribe(msg => {
      if(msg.event === "init") {
        console.log("init dude");
        // var fuck = ""
        this.drawioIframe.nativeElement.contentWindow.postMessage(JSON.stringify({action: 'load',
          autosave: 1, xml: ""}), '*');
        this.drawioIframe.nativeElement.contentWindow.postMessage(JSON.stringify({action: 'status',
          modified: true}), '*');
      }
    })
  }

  public toto() {
    window.addEventListener('message', this.postMessageListener, false);
    this.displayIframe = true;
  }
}
