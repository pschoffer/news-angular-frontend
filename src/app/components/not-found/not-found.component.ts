import { Component, OnInit } from "@angular/core";
import texts from "../../texts";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"]
})
export class NotFoundComponent implements OnInit {
  title: string = texts.notFound.title;
  description: string = texts.notFound.description;

  constructor() {}

  ngOnInit() {}
}
