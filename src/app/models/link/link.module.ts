import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class LinkModule {
  id: string;
  path: string;
  title: string;
  active: boolean;
}
