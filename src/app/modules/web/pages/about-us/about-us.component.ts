import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  contentAbout: any = [];

  constructor() {}

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
    this.contentAbout = [
      {
        header: [
          {
            hs_id: 1,
            background: './assets/fondo_banner_intern.jpg',
            image: './assets/aboutus/img_banner_about2.png',
            title: 'Acerca de',
            title2: 'Nosotros',
            description:
              'Contamos con la experiencia necesaria para brindar servicios en organizaciones como la suya, a fin de planificar, implementar y administrar soluciones digitales multiplataforma personalizadas',
            order: 1,
            buttons: [],
          },
        ],
        cta: [
          {
            cta_id: 1,
            location: 'right',
            title: 'Misión',
            padding: '',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
            background: '',
            image: './assets/aboutus/mision.png',
            order: 1,
            features: [],
            socials: [],
            buttons: [],
          },
          {
            cta_id: 2,
            location: 'left',
            title: 'Visión',
            padding: 'pl-0 md:pl-20 xl:pl-40',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
            background: '',
            image: './assets/aboutus/vision.png',
            order: 2,
            features: [
              {
                f_id: 1,
                description: 'Lorem ipsum dolor sit amet.',
                icon: {
                  name: 'fas fa-check-circle',
                },
                order: 1,
              },
              {
                f_id: 2,
                description: 'magna aliquyam erat.',
                icon: {
                  name: 'fas fa-check-circle',
                },
                order: 2,
              },
              {
                f_id: 3,
                description: 'sed diam voluptua.',
                icon: {
                  name: 'fas fa-check-circle',
                },
                order: 3,
              },
              {
                f_id: 4,
                description: 'diam nonumy eirmod tempor invidunt.',
                icon: {
                  name: 'fas fa-check-circle',
                },
                order: 4,
              },
            ],
            socials: [],
            buttons: [],
          },
        ],
        tabs: [],
      },
    ];
  }
}
