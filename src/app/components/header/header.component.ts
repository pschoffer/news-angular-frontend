import { Component, OnInit } from "@angular/core";
import { LinkModule } from "../../models/link/link.module";
import texts from "../../texts";
import { NewsService } from "src/app/services/news.service";
import { SourceModule } from "src/app/models/source/source.module";

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

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.fetchSources().subscribe(this.updateLinksFromSources);
  }

  mapSourceToLink = (source: SourceModule): LinkModule => {
    const { id, title } = source;

    return {
      id: id,
      path: "/" + id,
      title: title,
      active: false
    };
  };

  updateLinksFromSources = (sources: SourceModule[]) => {
    const sourcesLinks: LinkModule[] = sources.map(this.mapSourceToLink);

    this.links = [homeLink].concat(sourcesLinks);
  };
}
