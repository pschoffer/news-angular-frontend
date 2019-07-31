import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SourceModule } from "../models/source/source.module";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor() {}

  fetchSources(): Observable<SourceModule[]> {
    const tempSources: SourceModule[] = [
      { id: "test", title: "test" },
      { id: "test2", title: "test2" }
    ];

    return of(tempSources);
  }
}
