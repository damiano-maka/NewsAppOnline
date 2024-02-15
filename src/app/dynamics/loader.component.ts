import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
  <div class="position-fixed w-100 h-100 d-flex justify-content-center align-items-center spinner-position">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  
  `,
  styles: [`
   .spinner-position {
     z-index: 1000;
     background-color: rgba(142, 142, 142, 0.606);
    }
  
  `]
})
export class LoaderComponent {

}
