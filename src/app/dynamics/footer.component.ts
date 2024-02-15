import { Component, Input, input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ShareButtonsModule,
    ShareIconsModule,],
  template: `
  <nav [class]="classe" data-bs-theme="dark" aria-label="Twelfth navbar example">
  <div class="container-fluid justify-content-center">
      <div class="row mt-1 ">
          <div class="col-12">
          <div class="text-center">
          <span class="d-flex gap-1 align-items-center">
          <share-buttons [theme]="'circles-dark'"
 [include]="['whatsapp','facebook','twitter','messenger','telegram','linkedin','pinterest','reddit','tumblr','mix','viber','vk','whatsapp','xing','line','sms','email','print','copy']"
 [show]="6"
 [url]="''"
 [title]="'Il Mio Giornale'"
 [image]="'https://news-app-online.vercel.app/assets/newsIcon.png'"
 [description]="'Le ultime notizie in Italia :D'"
 [tags]="'#ultime #notizie #Italia'"
 [autoSetMeta]="false"

></share-buttons>
          </span>
          </div>
          </div>
      </div>
  </div>
</nav>
  `,
  styles: ``
})
export class FooterComponent {
  @Input() classe:string ="navbar fixed-bottom bg-body-tertiary border-top border-black";
}
