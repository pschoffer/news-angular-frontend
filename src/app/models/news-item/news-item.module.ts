import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class NewsItemModule {
  title: string;
  imageUrl?: string;
  description: string;
  date: string;
  category?: string;
  link: string;
  sourceId: string;
}
