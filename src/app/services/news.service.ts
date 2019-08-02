import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SourceModule } from "../models/source/source.module";
import { NewsItemModule } from "../models/news-item/news-item.module";
import config from "../config";

const newsSorcesUrl = config.backendEndpoint + config.newsSourcesPath;
const newsUrl = config.backendEndpoint + config.newsPath;
const newsFromSourceUrl = config.backendEndpoint + config.newsFromSourcePath;

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  fetchSources = (): Observable<SourceModule[]> => {
    return this.http.get<SourceModule[]>(newsSorcesUrl);
  };

  fetchAllNews = (): Observable<NewsItemModule[]> => {
    return this.http.get<NewsItemModule[]>(newsUrl);
  };

  fetchNews = (source: string): Observable<NewsItemModule[]> => {
    const specificUrl = newsFromSourceUrl.replace("{sourceId}", source);

    return this.http.get<NewsItemModule[]>(specificUrl);
  };
}
