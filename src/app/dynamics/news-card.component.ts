import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Article } from '../services/news.model';
import { DatePipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!--   <div class="card text-bg-dark">
      @if (!imageLoadError) {
        <img [src]="n.urlToImage" (error)="handleImageError()" class="card-news-img" alt="{{n.title}}">
      }@else {
         <img src="../../assets/not-found-img.jpeg" class="card-news-img">
      }
    <div class="card-img-overlay">
      <h5 class="card-title"><img src="../../assets/newsIcon.png" class="card-news-thumb pointerr" alt="{{n.title}}"> {{n.title}}</h5> 
      <p class="card-text"><small> Pubblicato {{n.publishedAt | date}}</small></p>
    </div>
    <div class="card-footer">
    <button (click)="cardClicked.emit(n)" class="text-white btn btn-secondary">CLICK</button>
    </div>
    </div> -->

  `,
  styles: [
    `
      h5,p{
        filter: drop-shadow(0 0 1px black);
        filter: drop-shadow(0 0 4px black);
      }
      .card-news-thumb{
        max-width:40px;
      }
    `,
  ]
})
export class NewsCardComponent {
/*  @Input({required: true}) n!: Article;
 @Input() messagioFooter: string = "Leggi di piu...";

 @Output() cardClicked = new EventEmitter<any>();


 imageLoadError: boolean = false;
 handleImageError() {
  this.imageLoadError = true;
 } */

}
