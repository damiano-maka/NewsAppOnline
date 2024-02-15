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
  private api ="306021cf39424031b1c3ac021ef1fb9b"

  public getHeadLines(categoria : string,lingua: string , size: number):Observable<Response>{
   return this.http.get<Response>(`${this.newUrl}/everything?q=${categoria}&language=${lingua}&pageSize=${size}&apiKey=${this.api}`,)
  }
}

