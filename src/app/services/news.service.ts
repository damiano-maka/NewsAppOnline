import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article, Response } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  http = inject(HttpClient);
  private newUrl = 'https://newsapi.org/v2'
  private api ="4070a172e2ee461f806f83700c34afb4"

  public getHeadLines(categoria : string,lingua: string , size: number):Observable<Response>{
   return this.http.get<Response>(`${this.newUrl}/everything?q=${categoria}&language=${lingua}&pageSize=${size}&apiKey=${this.api}`,)
  }
}

