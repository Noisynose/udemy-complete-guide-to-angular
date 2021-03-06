import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  //selector: "[app-servers]",
  //selector: ".app-servers",
  templateUrl: "./servers.component.html",
  //template: `
  //    <app-server></app-server>
  //    <app-server></app-server>
  //`,
  styleUrls: ["./servers.component.css"]
  //styles: [
  //  `
  //    h3 {
  //     color: dodgerblue;
  //    }
  //  `
  //]
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
}
