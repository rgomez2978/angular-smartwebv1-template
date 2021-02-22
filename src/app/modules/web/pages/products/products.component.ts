import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  headerInternList: any = [];
  carouselListService: any = [];

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
        image: './assets/products/img_banner_products.png',
        title: 'Productos y',
        title2: 'Servicios',
        description: 'Trabajamos día a día en perfeccionar nuestro método y en adaptarnos a nuevas tecnologías, enfocnadonos métodos de desarrollo de Software Ágil. Nuestros profesionales cuentan con certificaciones oficiales que avalan su formación en Scrum Master y Scrum Product Owner.',
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

  }

}
