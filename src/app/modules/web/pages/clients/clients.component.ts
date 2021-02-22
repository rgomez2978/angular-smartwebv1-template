import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  headerInternList: any = [];
  contentClients: any = [];

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

    this.contentClients = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: './assets/clients/img_banner_clients2.png',
          title: 'Nuestros',
          title2: 'Clientes',
          description: 'Fomentamos una estrecha colaboración con nuestros clientes para entender mejor sus objetivos y ofrecer una consultoría tecnológica que aporte un alto valor de negocio, aportando soluciones para mejorar procesos, gestionar, comunicar, vender y optimizar la rentabilidad de su negocio. ',
          order: 1,
          buttons: [],
        }
      ],
      clientes: [],
      testimonials: [
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
      ],
    }];


  }


}
