import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { HoverCardDirective } from './hover-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    HoverStyleDirective,
    HoverCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
