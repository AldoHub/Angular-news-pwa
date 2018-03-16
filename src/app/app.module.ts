import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

//forms Module
import { FormsModule }   from '@angular/forms';

//service
import {FetchnewsService} from "./fetchnews.service";



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchnewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
