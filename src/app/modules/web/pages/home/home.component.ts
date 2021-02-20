import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerSlideList: any = [];
  carouselListClient: any = [];
  carouselListService: any = [];
  carouselListTestimonials: any = [];

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
        image: './assets/fondo_banner_img.png',
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
    ];

    this.carouselListClient = [
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
    ];

    this.carouselListService = [
      {
        cs_id: 1,
        icon: {
          name: 'fab fa-app-store',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 1',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 1
      },
      {
        cs_id: 2,
        icon: {
          name: 'far fa-laptop-code',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 2',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 2
      },
      {
        cs_id: 3,
        icon: {
          name: 'far fa-tools',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 3',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 3
      },
      {
        cs_id: 4,
        icon: {
          name: 'far fa-network-wired',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 4',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 4
      },
      {
        cs_id: 5,
        icon: {
          name: 'far fa-grip-horizontal',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 5',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 5
      },
      {
        cs_id: 6,
        icon: {
          name: 'far fa-window-restore',
          size: 'text-2xl ',
        },
        header: {
          title: 'Servicio 6',
          size: 'text-xl',
          link: '',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        order: 6
      },
    ];

    this.carouselListTestimonials = [
      {
        cst_id: 1,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 1
      },
      {
        cst_id: 2,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 2
      },
      {
        cst_id: 3,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 3
      },
      {
        cst_id: 4,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 4
      },
      {
        cst_id: 5,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 5
      },
      {
        cst_id: 6,
        icon: {
          name: 'far fa-quote-left',
          size: 'text-4xl ',
        },
        sumary: {
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna dsadas sdas sad asdasd assadas dsadasdasd.',
          size: 'text-md',
        },
        sign: {
          description: 'Jhon Dhoe',
          size: 'text-sm',
        },
        order: 6
      },
    ];


  }
}
