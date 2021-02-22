import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-sites',
  templateUrl: './related-sites.component.html',
  styleUrls: ['./related-sites.component.scss']
})
export class RelatedSitesComponent implements OnInit {
  contentRelatedSites: any = [];

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

    this.contentRelatedSites = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: '',
          title: 'Sitios',
          title2: 'Relacionados',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
          order: 1,
          buttons: [],
        }
      ],
    }];

  }
}
