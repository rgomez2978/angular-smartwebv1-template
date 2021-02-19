import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerSlideList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.initArray();
  }

  /**
   * -------------------------------------------------------
   * @summary initArray
   * @description inicializacion de los arreglos
   * -------------------------------------------------------
   */
  initArray() {
    this.headerSlideList = [
      {
        hs_id: 1,
        background: './assets/fondo_banner.jpg',
        image:'./assets/fondo_banner_img.png',
        title: 'Soluciones rápidas',
        title2: '¡para tu negocio!',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
        order:1,
        buttons: [
          {
            btn_id: 1,
            type: 'active',
            name: 'empezar',
            link: '/privacy',
            order: 1
          },
          {
            btn_id: 2,
            type: 'normal',
            name: 'demostración',
            link: '/related',
            order: 2
          },
        ],
      },
      {
        hs_id: 2,
        background: './assets/fondo_banner.jpg',
        image:'./assets/fondo_banner_img.png',
        title: 'Soluciones rápidas',
        title2: '¡para tu negocio2!',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
        order:2,
        buttons: [
          {
            btn_id: 1,
            type: 'active',
            name: 'empezar2',
            link: '/privacy',
            order: 1
          },
          {
            btn_id: 2,
            type: 'normal',
            name: 'demostración2',
            link: '/related',
            order: 2
          },
        ],
      },
    ];
  }
}
