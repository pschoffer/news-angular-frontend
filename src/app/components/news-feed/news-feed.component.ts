import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsService } from "src/app/services/news.service";
import { NewsItemModule } from "src/app/models/news-item/news-item.module";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css"]
})
export class NewsFeedComponent implements OnInit {
  newsItems: NewsItemModule[];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.updateSource(params.source));
  }

  updateSource = (source: string) => {
    if (source) {
      this.newsService.fetchNews(source).subscribe(this.showNewsItems);
    } else {
      this.newsService.fetchAllNews().subscribe(this.showNewsItems);
    }
  };

  showNewsItems = (newsItems: NewsItemModule[]) => {
    this.newsItems = newsItems;
  };
}
