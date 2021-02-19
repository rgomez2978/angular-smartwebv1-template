import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  footerList: any = [];
  navbarList: any = [];
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
    this.footerList = [
      {
        fo_id: 1,
        description: 'Políticas de privacidad',
        link: '/privacy',
        order: 1,
      },
      {
        fo_id: 2,
        description: 'Términos legales',
        link: '/terms',
        order: 2,
      },
      {
        fo_id: 3,
        description: 'Sitios relacionados',
        link: '/related',
        order: 3,
      },
      {
        fo_id: 4,
        description: 'Mapa del sitio',
        link: '/sitemap',
        order: 4,
      },
    ];

    this.navbarList = [
      {
        nav_id: 1,
        logo: './assets/logo.png',
        items: [
          {
            nav_id: 1,
            name: 'Inicio',
            link: '/home',
            icon: 'fas fa-home',
            order: 1
          },
          {
            nav_id: 2,
            name: 'Nosotros',
            link: '/about',
            icon: 'fas fa-address-card',
            order: 2
          },
          {
            nav_id: 3,
            name: 'Productos',
            link: '/products',
            icon: 'fab fa-artstation',
            order: 3
          }, {
            nav_id: 4,
            name: 'Clientes',
            link: '/clients',
            icon: 'fas fa-user-tag',
            order: 4
          }, {
            nav_id: 5,
            name: 'Aliados',
            link: '/partners',
            icon: 'fas fa-people-arrows',
            order: 5
          }, {
            nav_id: 6,
            name: 'Noticias',
            link: '/news',
            icon: 'far fa-newspaper',
            order: 6
          }, {
            nav_id: 7,
            name: 'Contactos',
            link: '/contacts',
            icon: 'fas fa-envelope-open-text',
            order: 7
          },
        ]
      }
    ];
  }

}
