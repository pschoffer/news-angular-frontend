import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SourceModule } from "../models/source/source.module";
import { NewsItemModule } from "../models/news-item/news-item.module";
import config from "../config";

const newsSorcesUrl = config.backendEndpoint + config.newsSourcesPath;

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  fetchSources = (): Observable<SourceModule[]> => {
    return this.http.get<SourceModule[]>(newsSorcesUrl);
  };

  fetchAllNews = (): Observable<NewsItemModule[]> => {
    // TODO: Change to the real thing

    return this.fetchNews("");
  };

  fetchNews = (source: string): Observable<NewsItemModule[]> => {
    // TODO: Change to the real thing
    const tempNews: NewsItemModule[] = [
      {
        title: "Test",
        link:
          "https://www.nt.se/nyheter/norrkoping/hade-hasch-i-bostade-atalas-om6227452.aspx",
        description:
          "Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping.",
        pictureUrl:
          "https://img10.ntm.eu/om/public/img/6227841/0730162111/aterforenade-tillslut-i-se?w=790",
        date: "Wed, 31 Jul 2019 10:30:00 +0200",
        category: "Valdemarsvik",
        source: "From: " + source
      },
      {
        title: "Test2",
        link:
          "https://www.nt.se/nyheter/norrkoping/hade-hasch-i-bostade-atalas-om6227452.aspx",
        description:
          "Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping.",
        date: "Wed, 31 Jul 2019 10:30:00 +0200",
        category: "Valdemarsvik",
        source: "From: " + source
      },
      {
        title: "Test3",
        link:
          "https://www.nt.se/nyheter/norrkoping/hade-hasch-i-bostade-atalas-om6227452.aspx",
        description:
          "Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping. Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping. Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping.",
        pictureUrl:
          "https://z.cdn-expressen.se/images/0c/d2/0cd2787d3f3d49bdafc28f13d1442f11/16x6/265@70.jpg",
        date: "Wed, 31 Jul 2019 10:30:00 +0200",
        source: "From: " + source
      }
    ];

    return of(tempNews);
  };
}
