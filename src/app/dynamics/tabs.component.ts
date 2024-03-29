import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output,  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink ,CommonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ul class="nav nav-tabs text-center scroll mb-3 pointer">

  @for (categoria of categorieNotizie; track $index) {
  <div class="dropdown ">
  <a class="dropdown-toggle btn btn-secondary btn-sm m-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {{categoria.nome}}
  </a>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
  @for (sottocategoria of categoria.sottocategorie; track $index) {
    <li><a class="dropdown-item" (click)="category.emit(sottocategoria)">{{sottocategoria}}</a></li>
  }
  </ul>
</div>
  }
  </ul>

<hr/>

  `,
  styles: [`
  .nav-link{
    color: #495057;
  }
  `]
})
export class TabsComponent {
  @Output() category = new EventEmitter<string>();

  categorieNotizie: any[] = [
    { nome: 'Politica', sottocategorie: ['Governo', 'Parlamento', 'Elezioni', 'Partiti'] },
    { nome: 'Cronaca', sottocategorie: ['Criminalità', 'Emergenze', 'Incidenti'] },
    { nome: 'Economia', sottocategorie: ['Mercati', 'Lavoro', 'Imprese', 'Finanza'] },
    { nome: 'Tecnologia', sottocategorie: ['Innovazione', 'Internet', 'Smartphone', 'Scienza'] },
    { nome: 'Sport', sottocategorie: ['Calcio', 'Basket', 'Tennis', 'Formula 1'] },
    { nome: 'Cultura', sottocategorie: ['Arte', 'Letteratura', 'Musica', 'Cinema'] },
    { nome: 'Scienza', sottocategorie: ['Medicina', 'Ambiente', 'Astronomia', 'Biologia'] },
    { nome: 'Salute', sottocategorie: ['Prevenzione', 'Malattie', 'Dieta', 'Fitness'] },
    { nome: 'Intrattenimento', sottocategorie: ['TV', 'Cinema', 'Musica', 'Eventi'] },
    { nome: 'Viaggi', sottocategorie: ['Destinazioni', 'Cultura', 'Avventure', 'Gastronomia'] },
    { nome: 'Moda', sottocategorie: ['Tendenze', 'Stilisti', 'Accessori', 'Sfilate'] },
    { nome: 'Auto', sottocategorie: ['Novità', 'Recensioni', 'Motori', 'Guida sicura'] },
    { nome: 'Musica', sottocategorie: ['Artisti', 'Album', 'Concerti', 'Festival'] },
    { nome: 'Arte', sottocategorie: ['Mostre', 'Artisti contemporanei', 'Pittura', 'Scultura'] },
    { nome: 'Letteratura', sottocategorie: ['Libri', 'Autori', 'Poesia', 'Letteratura classica'] },
    { nome: 'Religione', sottocategorie: ['Cristianesimo', 'Islam', 'Buddhismo', 'Altre religioni'] },
    { nome: 'Educazione', sottocategorie: ['Scuola', 'Università', 'Formazione', 'E-learning'] },
    { nome: 'Lavoro', sottocategorie: ['Occupazione', 'Carriera', 'Imprenditoria', 'Mercato del lavoro'] },
    { nome: 'Famiglia', sottocategorie: ['Genitorialità', 'Maternità', 'Educazione dei figli', 'Relazioni familiari'] },
    { nome: 'Teatro', sottocategorie: ['Spettacoli', 'Recensioni', 'Attori', 'Drammaturgia'] },
    { nome: 'Cinema', sottocategorie: ['Film', 'Recensioni', 'Attori', 'Festival'] },
    { nome: 'Fotografia', sottocategorie: ['Fotografi', 'Mostre', 'Tecniche', 'Fotografia digitale'] },
    { nome: 'Astrologia', sottocategorie: ['Oroscopo', 'Astrologi famosi', 'Segni zodiacali', 'Astrologia vedica'] },
    { nome: 'Fumetti', sottocategorie: ['Supereroi', 'Manga', 'Graphic novel', 'Fumetti online'] },
    { nome: 'Giornalismo', sottocategorie: ['Notizie', 'Reportage', 'Editoriali', 'Investigazioni'] },
    { nome: 'Storia', sottocategorie: ['Storia antica', 'Storia contemporanea', 'Biografie', 'Archeologia'] },
    { nome: 'Televisione', sottocategorie: ['Programmi TV', 'Serie', 'Reality show', 'Gossip televisivo'] },
    { nome: 'Umorismo', sottocategorie: ['Satira', 'Comicità', 'Barzellette', 'Comici'] },
  ];
  
}
