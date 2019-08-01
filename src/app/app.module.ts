import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NewsFeedComponent } from "./components/news-feed/news-feed.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NewsItemComponent } from "./components/news-item/news-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,
    NotFoundComponent,
    FooterComponent,
    NewsItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
