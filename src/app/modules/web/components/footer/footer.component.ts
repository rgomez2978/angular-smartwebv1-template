import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() data: any;
  dataFooter: any;
  itemId: string;
  urlActive: string;
  iconSocials: any = [];


  constructor(
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.dataFooter = this.data;
    this.initArray()
    setTimeout(() => {
      this.getURlView();
    }, 20);
  }

  /**
   * -------------------------------------------------------
   * @summary getURlView
   * @description toma el nombre de la vista o componente cargado en la url
   * -------------------------------------------------------
   */
  getURlView() {
    this.urlActive = '/' + this._router.url.split('/')[1];
    console.log('url footer :>> ', this.urlActive);
  }

  /**
   * -------------------------------------------------------
   * @summary goTo
   * @description redirecciona a la ruta de cada componete o routerlink
   * -------------------------------------------------------
   */
  goTo(link) {
    this._router.navigate([link]);
    setTimeout(() => {
      this.getURlView();
    }, 10);
  }


  /**
   * -------------------------------------------------------
   * @summary initArray
   * @description inicializacion de los arreglos
   * -------------------------------------------------------
   */
  initArray() {
    this.iconSocials = [
      {
        is_id: 1,
        icon: 'fab fa-facebook-square',
        title: 'facebook',
        description: 'facebook',
        link: 'https://www.facebook.com/',
        order: 1,
      },
      {
        is_id: 2,
        icon: 'fab fa-twitter-square',
        title: 'twitter',
        description: 'twitter',
        link: 'https://twitter.com/',
        order: 2,
      },
      {
        is_id: 3,
        icon: 'fab fa-instagram',
        title: 'instagram',
        description: 'instagram',
        link: 'https://www.instagram.com/',
        order: 3,
      },
      {
        is_id: 4,
        icon: 'fab fa-whatsapp',
        title: 'whatsapp',
        description: 'whatsapp',
        link: 'https://www.whatsapp.com/',
        order: 4,
      },
      {
        is_id: 5,
        icon: 'fab fa-linkedin',
        title: 'linkedin',
        description: 'linkedin',
        link: 'https://es.linkedin.com/',
        order: 5,
      },
      {
        is_id: 6,
        icon: 'fab fa-youtube-square',
        title: 'youtube',
        description: 'youtube',
        link: 'https://www.youtube.com/',
        order: 6,
      },
    ];
  }


}
