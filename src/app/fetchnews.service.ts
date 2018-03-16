import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable()
export class FetchnewsService {

  constructor(private httpClient: HttpClient) { }

  //get the actual news sources
  getSources(){
    return this.httpClient.get("https://newsapi.org/v1/sources?apiKey=d2bd4483ceb44f01ae177734f4228c4e");   

  }

  //get the news from the News API
  getNews(source:string, relevance:string){
   return this.httpClient.get("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=d2bd4483ceb44f01ae177734f4228c4e");   
  }
}
