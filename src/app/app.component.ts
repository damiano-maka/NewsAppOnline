import { Component, Directive, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './dynamics/navbar.component';
import { LoaderComponent } from './dynamics/loader.component';
import { AsyncPipe } from '@angular/common';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { FooterComponent } from './dynamics/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LoaderComponent,AsyncPipe,FooterComponent],
  template: `
    @if (isLoaderVisible | async) {<app-loader/>}
    <app-navbar/>
    <div class="container p-2">
      <router-outlet /> 
    </div>
  <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Il Mio Giornale';

  loader = inject(LoaderService);
  isLoaderVisible: Observable<Boolean> = this.loader.loader$.asObservable();

}
