import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contentContacts: any = [];

  constructor() { }

  ngOnInit(): void {
    this.initArray();

  }

  initArray() {
    this.contentContacts = [{
      header: [
        {
          hs_id: 1,
          background: './assets/fondo_banner_intern.jpg',
          image: './assets/news/img_banner_news.png',
          gmap: [

          ],
          title: 'Con',
          title2: 'tactos',
          description: '3ra avenida de Los Palos Grandes, entre 6ta y 7ma transversal, Quinta Hidrocaven. Caracas - Venezuela.',
          order: 1,
          buttons: [],
        }
      ],
    }];
  }

}
