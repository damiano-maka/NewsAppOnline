import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsCardComponent } from '../dynamics/news-card.component';
import { Article } from '../services/news.model';
import { filter, map } from 'rxjs';
import { NewsCardd } from './comp';

import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
@Component({
  selector: 'app-public',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsCardComponent,NewsCardd],
  template: `
  <!-- <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 p-2 ">
    @for (item of news(); track $index) {
      <app-news-card [n]="item" (cardClicked)="log($event)"/>
    }
  </div>   
  @for(news of news(); track $index){
      <app-news-card [n]="news" (cardClicked)="log($event)"/>
    }-->



    
    
  `,
  styles: ``
})
export default class PublicComponent implements OnInit {
  
  
  
  
  
  
  
  
  
  news = signal<any | undefined>(undefined);
  newsService = inject(NewsService);
  n = {
    categoria : "italia",
    lingua : "it",
    size : 10
  }
  ngOnInit(): void {
   /*  this.newsService.getHeadLines(this.n.categoria, this.n.lingua , this.n.size)
    .pipe(
      map(news => news.articles),
      filter(article => article.urlToImage !== null)
    )
    .subscribe((data : any) => {
      console.log(data);
      this.news.set(data) 
    }); */
  }


}
