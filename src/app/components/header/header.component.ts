import { Component, OnInit } from "@angular/core";
import { LinkModule } from "../../models/link/link.module";
import texts from "../../texts";

const homeLink: LinkModule = {
  id: "home",
  path: "/",
  title: texts.header.home,
  active: false
};

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  brand: string = texts.header.brand;
  links: LinkModule[];

  constructor() {
    console.log(homeLink);
  }

  ngOnInit() {
    this.links = [homeLink, homeLink];
  }
}
