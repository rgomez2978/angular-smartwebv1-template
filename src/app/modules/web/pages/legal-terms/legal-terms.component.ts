import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-terms',
  templateUrl: './legal-terms.component.html',
  styleUrls: ['./legal-terms.component.scss']
})
export class LegalTermsComponent implements OnInit {

  contentLegal: any = [];

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

    this.contentLegal = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: '',
          title: 'Términos',
          title2: 'Legales',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
          order: 1,
          buttons: [],
        }
      ],
    }];

  }
}
