import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  headerInternList: any = [];
  ctaList: any = [];

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
    this.headerInternList = [
      {
        hs_id: 1,
        background: './assets/fondo_banner_intern.jpg',
        image: './assets/aboutus/img_banner_about.png',
        title: 'Acerca de',
        title2: 'Nosotros',
        description: 'Contamos con la experiencia necesaria para brindar servicios en organizaciones como la suya, a fin de planificar, implementar y administrar soluciones digitales multiplataforma personalizadas',
        order: 1,
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
      }
    ];

    this.ctaList = [
      {
        cta_id: 1,
        location:'left',
        title: 'Misión',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
        background: '',
        image: './assets/aboutus/mision.png',
        order:1,
        features: [],
        buttons: [

        ],
      },
      {
        cta_id: 2,
        location:'right',
        title: 'Visión',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
        background: '',
        image: './assets/aboutus/vision.png',
        order:2,
        features: [],
        buttons: [
          {
            btn_id: 1,
            type: 'active',
            name: 'boton 1',
            link: '',
            order: 1
          },
          {
            btn_id: 2,
            type: 'normal',
            name: 'boton 2',
            link: '',
            order: 2

          },
        ],
      },
    ];

  }




}
