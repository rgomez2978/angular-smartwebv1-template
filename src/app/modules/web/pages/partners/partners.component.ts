import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  headerInternList: any = [];
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
    this.headerInternList = [
      {
        hs_id: 1,
        background: './assets/fondo_banner_intern.jpg',
        image: './assets/partners/img_banner_partners2.png',
        title: 'Distribuidores y',
        title2: 'Socios',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.',
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
