import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsFeedComponent } from "./components/news-feed/news-feed.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: NewsFeedComponent },
  { path: ":source", component: NewsFeedComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
