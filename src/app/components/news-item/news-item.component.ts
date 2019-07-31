import { Component, OnInit, Input } from "@angular/core";
import { NewsItemModule } from "src/app/models/news-item/news-item.module";
import texts from "../../texts";


@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.css"]
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsItemModule;
  linkText:string = texts.newsItem.linkText;

  constructor() {}

  ngOnInit() {
    console.log(this.newsItem);
  }
}
