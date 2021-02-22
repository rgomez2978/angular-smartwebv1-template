import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  contentNews: any = [];

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
    this.contentNews = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: './assets/news/img_banner_news.png',
          title: 'Noticias y',
          title2: 'Eventos',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.',
          order: 1,
          buttons: [],
        }
      ],
      last: [],
      others: [
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
