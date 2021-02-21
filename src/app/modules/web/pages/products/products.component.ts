import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  headerInternList: any = [];

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
  }

}
