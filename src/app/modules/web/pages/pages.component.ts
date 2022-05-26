import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  contenLayout: any = [];

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

    this.contenLayout = [
      {
        navbar: [
          {
            nav_id: 1,
            logo: './assets/logo.png',
            items: [
              {
                nav_id: 1,
                name: 'Inicio',
                link: './home',
                icon: 'fas fa-home',
                order: 1
              },
              {
                nav_id: 2,
                name: 'Nosotros',
                link: './about',
                icon: 'fas fa-address-card',
                order: 2
              },
              {
                nav_id: 3,
                name: 'Productos',
                link: './products',
                icon: 'fab fa-artstation',
                order: 3
              }, {
                nav_id: 4,
                name: 'Clientes',
                link: './clients',
                icon: 'fas fa-user-tag',
                order: 4
              }, {
                nav_id: 5,
                name: 'Aliados',
                link: './partners',
                icon: 'fas fa-people-arrows',
                order: 5
              }, {
                nav_id: 6,
                name: 'Noticias',
                link: './news',
                icon: 'far fa-newspaper',
                order: 6
              }, {
                nav_id: 7,
                name: 'Contactos',
                link: './contacts',
                icon: 'fas fa-envelope-open-text',
                order: 7
              },
            ]
          }
        ],
        footer: [
          {
            img: './assets/logo2.png',
            socials: [
              {
                is_id: 1,
                icon: 'fab fa-facebook-square',
                title: 'facebook',
                link: 'https://www.facebook.com/',
                order: 1,
              },
              {
                is_id: 2,
                icon: 'fab fa-twitter-square',
                title: 'twitter',
                link: 'https://twitter.com/',
                order: 2,
              },
              {
                is_id: 3,
                icon: 'fab fa-instagram',
                title: 'instagram',
                link: 'https://www.instagram.com/',
                order: 3,
              },
              {
                is_id: 4,
                icon: 'fab fa-whatsapp',
                title: 'whatsapp',
                link: 'https://www.whatsapp.com/',
                order: 4,
              },
              {
                is_id: 5,
                icon: 'fab fa-linkedin',
                title: 'linkedin',
                link: 'https://es.linkedin.com/',
                order: 5,
              },
              {
                is_id: 6,
                icon: 'fab fa-youtube-square',
                title: 'youtube',
                link: 'https://www.youtube.com/',
                order: 6,
              },
            ],
            links: [
              {
                fo_id: 1,
                description: 'Políticas de privacidad',
                link: './privacy',
                order: 1,
              },
              {
                fo_id: 2,
                description: 'Términos legales',
                link: './terms',
                order: 2,
              },
              {
                fo_id: 3,
                description: 'Sitios relacionados',
                link: './related',
                order: 3,
              },
              {
                fo_id: 4,
                description: 'Mapa del sitio',
                link: './sitemap',
                order: 4,
              },
            ]
          }
        ]
      }
    ]

  }

}
