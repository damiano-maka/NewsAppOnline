import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Article } from '../models/news.model';
import { DatePipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  @if(news){
  <div class="card text-bg-dark">
      @if (!imageLoadError) {
        <img [src]="news.urlToImage" style="max-width: 800px; max-height:880px;"  (error)="handleImageError()" class="card-news-img" alt="{{news.title}}">
      }@else {
         <img src="../../assets/not-found-img.jpeg" class="card-news-img"alt="{{news.title}}" >
      }
      <div class="card-img-overlay">
        <h5 class="card-title"><img src="../../assets/newsIcon.png" class="card-news-thumb me-2 mb-2" alt="{{news.title}}">
        <b (click)="cardClicked.emit(news)" class="pointer">{{news.title}}</b>
      </h5> 
        <p class="card-text"><small> Pubblicato {{news.publishedAt | date}}</small></p>
      </div>
      <div class="card-footer z-3">
          <b (click)="cardClicked.emit(news)" class="text-white pointer h5">{{messagioFooter}}</b>
      </div>    
  </div>}
  `,
  styles: [
    `
      h5,p{
        filter: drop-shadow(0 0 0.5px black);
        filter: drop-shadow(0 0 0.5px black);
        filter: drop-shadow(0 0 4px black);
        color: #edf6f9;
      }
      .card-news-thumb{
        max-width:35px;
      }
    `,
  ]
})
export class NewsCardComponent {
  @Input() messagioFooter: string = "Leggi di piu...";
  @Input({required : true}) news!: Article;
  @Output() cardClicked = new EventEmitter<any>();
  imageLoadError: boolean = false;
  handleImageError() {
   this.imageLoadError = true;
  }

}
