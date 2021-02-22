import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.scss']
})
export class PrivacyPoliciesComponent implements OnInit {

  contentPrivacy: any = [];

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

    this.contentPrivacy = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: '',
          title: 'Políticas de',
          title2: 'Privacidad',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
          order: 1,
          buttons: [],
        }
      ],
    }];

  }
}
