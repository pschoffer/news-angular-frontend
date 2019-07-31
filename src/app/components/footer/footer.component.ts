import { Component, OnInit } from "@angular/core";
import texts from "../../texts";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  text: string;

  constructor() {}

  ngOnInit() {
    console.log(texts);
    this.text = texts.footer.text;
  }
}
