import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar bg-body-tertiary border-bottom border-white" data-bs-theme="dark" aria-label="Twelfth navbar example">
  <div class="container-fluid justify-content-center">
      <div class="row mt-1 ">
          <div class="col-12">
          <div class="text-center">
          <span class="d-flex gap-1 align-items-center">
          <img src="../../assets/newsIcon.png" width="40px" alt="newsicon">
          <p class="text-white h1">Mio Giornale</p>
          </span>
          </div>
          </div>
      </div>
  </div>
</nav>
  `,
  styles: ``
})
export class NavbarComponent {

}
