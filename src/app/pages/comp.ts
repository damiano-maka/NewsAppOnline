import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Article } from '../services/news.model';

@Component({
  selector: 'app-news-cardd',
  standalone: true,
  template: `
   <div class="card text-bg-dark">
      @if (!imageLoadError) {
        <img [src]="news.urlToImage" (error)="handleImageError()" class="card-news-img" alt="{{news.title}}">
      }@else {
         <img src="../../assets/not-found-img.jpeg" class="card-news-img">
      }
    <div class="card-img-overlay">
      <h5 class="card-title"><img src="../../assets/newsIcon.png" class="card-news-thumb pointerr" alt="{{news.title}}"> {{news.title}}</h5> 
      <p class="card-text"><small> Pubblicato {{news.publishedAt}}</small></p>
    </div>
    <div class="card-footer">
      <button (click)="cardClicked.emit(news)" class="text-white btn btn-secondary">CLICK</button>
    </div>
    </div>
  `,
})
export class NewsCardd {
  @Input() news!: Article;
  @Output() cardClicked = new EventEmitter<any>();

imageLoadError: boolean = false;
 handleImageError() {
  this.imageLoadError = true;
 }
}
