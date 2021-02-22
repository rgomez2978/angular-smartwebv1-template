import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contenHome: any = [];

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

    this.contenHome = [
      {
        header: [
          {
            hs_id: 1,
            background: './assets/fondo_banner.jpg',
            image: './assets/home/img_banner_home.png',
            title: 'Soluciones rápidas',
            title2: '¡para tu negocio!',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
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
          },
          {
            hs_id: 2,
            background: './assets/fondo_banner.jpg',
            image: './assets/fondo_banner_img.png',
            title: 'Soluciones rápidas',
            title2: '¡para tu negocio2!',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
            order: 2,
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
        ],
        applications: [],
        cta: [
          {
            cta_id: 1,
            location: 'right',
            title: 'Visita nuestras redes sociales',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
            background: '',
            image: './assets/home/redes.png',
            order: 1,
            features: [],
            buttons: [],
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
          }
        ],
        carousel: [
          {
            cc_id: 1,
            image: './assets/clients/client-1.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 1
          },
          {
            cc_id: 2,
            image: './assets/clients/client-2.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 2
          },
          {
            cc_id: 3,
            image: './assets/clients/client-3.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 3
          },
          {
            cc_id: 4,
            image: './assets/clients/client-4.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 4
          },
          {
            cc_id: 5,
            image: './assets/clients/client-5.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 5
          },
          {
            cc_id: 6,
            image: './assets/clients/client-3.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 6
          },
        ],
      }
    ];


  }
}
