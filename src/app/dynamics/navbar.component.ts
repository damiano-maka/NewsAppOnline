import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
<nav class="navbar sticky-top bg-body-tertiary border-bottom border-black" data-bs-theme="dark" aria-label="Twelfth navbar example">
  <div class="container-fluid justify-content-center">
      <div class="row mt-1 ">
          <div class="col-12">
          <div class="text-center">
          <span class="d-flex">
          <img src="../../assets/newsIcon.png" width="50px" alt="newsicon">
          <p class="text-white h1 mt-2 ms-2">Il Mio Giornale</p>
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
