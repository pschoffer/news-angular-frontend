import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SourceModule } from "../models/source/source.module";
import { NewsItemModule } from "../models/news-item/news-item.module";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor() {}

  fetchSources = (): Observable<SourceModule[]> => {
    // TODO: Change to the real thing
    const tempSources: SourceModule[] = [
      { id: "test", title: "test" },
      { id: "test2", title: "test2" }
    ];

    return of(tempSources);
  };

  fetchAllNews = (): Observable<NewsItemModule[]> => {
    // TODO: Change to the real thing

    console.log("Fetching stuff");

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
        source: "sek"
      },
      {
        title: "Test2",
        link:
          "https://www.nt.se/nyheter/norrkoping/hade-hasch-i-bostade-atalas-om6227452.aspx",
        description:
          "Polisen hittade cannabis när de kontrollerade den 21-åriga mannen i centrala Norrköping.",
        date: "Wed, 31 Jul 2019 10:30:00 +0200",
        category: "Valdemarsvik",
        source: "sek"
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
        source: "sek"
      }
    ];

    return of(tempNews);
  };
}
