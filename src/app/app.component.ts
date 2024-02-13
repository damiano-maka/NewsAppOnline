import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './dynamics/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  template: `
    <app-navbar/>
    <div class="container p-2">
      <router-outlet /> 
    </div>
 
  `,
  styles: [],
})
export class AppComponent {
  title = 'mio-giornale';
}
