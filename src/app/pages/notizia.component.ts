import { Component, OnInit, inject, signal } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { Article } from '../models/news.model';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { LoaderComponent } from '../dynamics/loader.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-notizia',
  standalone: true,
  imports: [JsonPipe,LoaderComponent],
  template: `
  <div class="container  text-white">
  @if(news){ 
    <span class="col-3 mb-2">
    <p class="h5"><b class="h5 pointer" (click)="goback()"><i class="bi bi-arrow-bar-left "></i> Torna Indietro</b></p>
    </span>
    <hr>
    <div class="container">
      <div class="col-12">
        <!-- autore e media -->
        <p class="h6">Autore : {{news.author}}  |  Media : {{news.source.name}}</p>
        <!-- titolo centro -->
        <p class="h1 text-center mt-3">{{news.title}}</p>
        <!-- span imagine centro -->
        <span class="card mt-3 shadow">
           @if (!imageLoadError) {
            <img [src]="news.urlToImage" (error)="handleImageError()" class="imageN" [alt]="news.title">
           }@else {
             <img src="../../assets/not-found-img.jpeg" class="card-news-img"alt="{{news.title}}" >
           }
         
        </span>
        <article class="mt-3">
        @if (news.description) { <p class="h3">{{news.description}}</p>}
        @else{<p class="h3">{{news.content}}</p>}
        <p class="h2 mt-3">Guarda il intero articolo su : <i class="pointer underline" (click)="goTo(news.url)">Clicca qui</i></p>
        </article>
      </div>
    </div>}@else {
      <span class="text-center mt-5">
      <p class="h1 mt-5">Attualmente non abbiamo informazioni su questo articolo... <br> Riprova piu tardi ! Grazie <i class="bi bi-emoji-smile"></i> </p>
      </span>
    }
  </div>
  `,
  styles: [`
   .imageN{
     width:100%;
     height : 100%;
     border : none;
     outline : none;
   }
   .shadow{
    filter: drop-shadow(0 0 14px black);
   }
  `]
})
export default class NotiziaComponent implements OnInit  {
  
  route= inject(ActivatedRoute);
  location= inject(Location)
  news!: Article;
  ngOnInit() {

 
    const existingData = localStorage.getItem('data');
    if (existingData) {
      this.news = JSON.parse(existingData);
    }

    this.route.queryParams.subscribe(params => {
      const serializedData = params['article'];

      if (serializedData) {
        localStorage.setItem('data', serializedData);
        this.news = JSON.parse(serializedData);
        
        window.location.pathname
        history.replaceState({}, '', window.location.pathname);

       
      }
    });
  }

  imageLoadError: boolean = false;
  handleImageError() {
   this.imageLoadError = true;
  }

  goTo(link : string){
    window.open(link, '_blank');
  }

  goback(){
    history.back()
  }
}