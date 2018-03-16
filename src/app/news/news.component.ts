import { Component, OnInit } from '@angular/core';

//import the service
import {FetchnewsService} from "../fetchnews.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: FetchnewsService) { }

  newsArray: any[];
  newsSources: any[] = [];
  newsDescription :string;
  newNewsArray: any[] = [];

  newsSource: string;
  newsRelevance: string;

  //pass the event object
  //in order to get the value inside the
  // option for the select

  changeHandlerSource($event){
    //get the value of the selected option
    let source = $event.target.value; 
    this.newsSource = source;
  }

  changeHandlerRelevance($event){
    //get the value of the selected option
    let relevance = $event.target.value; 
    this.newsRelevance = relevance;
  }


  //submit fucntion that sends the data to the News API
  send() {
    this.newsService.getNews(this.newsSource, this.newsRelevance).subscribe(data =>{
      //once subscribed, lets get the data
      this.newNewsArray= [];

      //lets loop inside the articles property
      data["articles"].map(article =>{
        this.newNewsArray.push(article);
      })
    });
 
  }


  
  ngOnInit() {
    //function that will get the sources
    this.newsService.getSources().subscribe(sources =>{
      
      console.log(sources);
      sources["sources"].map(source=>{
        this.newsSources.push(source);
      });
    });

    
     }

}
