import { Component, OnChanges, Input } from "@angular/core";
import { SourceModule } from "src/app/models/source/source.module";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: "app-source-info",
  templateUrl: "./source-info.component.html",
  styleUrls: ["./source-info.component.css"]
})
export class SourceInfoComponent implements OnChanges {
  @Input() source: string;
  sourceModule: SourceModule;

  constructor(private newsService: NewsService) {}

  ngOnChanges() {
    this.newsService.fetchSources().subscribe(this.populateSouceModule);
  }

  populateSouceModule = (allSources: SourceModule[]) => {
    this.sourceModule = allSources.filter(
      sourceModule => sourceModule.id === this.source
    )[0];
  };
}
