import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsCardComponent } from '../dynamics/news-card.component';
import { Article } from '../models/news.model';
import { FooterComponent } from '../dynamics/footer.component';
import { Router, RouterLink } from '@angular/router';
import 'zone.js';
import { LoaderComponent } from '../dynamics/loader.component';
import { TabsComponent } from '../dynamics/tabs.component';

@Component({
  selector: 'app-public',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsCardComponent,LoaderComponent,
    FooterComponent,RouterLink,TabsComponent
    ],
  template: `

  <app-tabs (category)="updateCategory($event)" />
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 p-2 ">
    @for(news of news(); track $index){
      <app-news-card [news]="news" (cardClicked)="log($event)" />
    }
  </div>
 <!--  <app-footer/>
 -->

  
  `,
  styles:[`
  .scroll{
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
  }
  `]
})
export default class PublicComponent implements OnInit {
  
  news = signal<Article[]>([]);
  newsService = inject(NewsService);
  router = inject(Router);
  n = {
    categoria : "Italia",
    lingua : "it",
    size : 30
  }

  log(data : Article){
    this.router.navigate(['/notizia'], { queryParams: { article: JSON.stringify(data) } });
  }
 

  updateCategory(newCategory: string) {
    this.n.categoria = newCategory;
    this.newsService.getHeadLines(this.n.categoria, this.n.lingua, this.n.size)
      .subscribe(
        (data) => {
          const datas = data.articles;
          this.news.set(datas);
        },
        () => {

        }
      );
  }

  ngOnInit(): void {
    this.updateCategory(this.n.categoria); 
  }

}
