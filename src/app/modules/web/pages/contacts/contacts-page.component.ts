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
          image: './assets/contacts/img_banner_contacts3.jpg',
          gmap: [

          ],
          title: 'Con',
          title2: 'tactos',
          description: '3ra avenida de Los Palos Grandes, entre 6ta y 7ma transversal, Quinta Hidrocaven. Caracas - Venezuela.',
          order: 1,
          buttons: [],

          contact: [
            {
              emails: [
                {
                  em_id: 1,
                  order: 1,
                  description: 'correo1@hidrocaven.com',
                },
                {
                  em_id: 2,
                  order: 2,
                  description: 'correo2@hidrocaven.com',
                }
              ],
              socials: [
                {
                  is_id: 1,
                  icon: 'fab fa-facebook-square',
                  title: 'facebook',
                  link: 'https://www.facebook.com/',
                  order: 1,
                },
                {
                  is_id: 2,
                  icon: 'fab fa-twitter-square',
                  title: 'twitter',
                  link: 'https://twitter.com/',
                  order: 2,
                },
                {
                  is_id: 3,
                  icon: 'fab fa-instagram',
                  title: 'instagram',
                  link: 'https://www.instagram.com/',
                  order: 3,
                },
                {
                  is_id: 4,
                  icon: 'fab fa-whatsapp',
                  title: 'whatsapp',
                  link: 'https://www.whatsapp.com/',
                  order: 4,
                },
                {
                  is_id: 5,
                  icon: 'fab fa-linkedin',
                  title: 'linkedin',
                  link: 'https://es.linkedin.com/',
                  order: 5,
                },
                {
                  is_id: 6,
                  icon: 'fab fa-youtube-square',
                  title: 'youtube',
                  link: 'https://www.youtube.com/',
                  order: 6,
                },
              ],
              phones: [
                {
                  tlf_id: 1,
                  order: 1,
                  cod_country: 58,
                  cod_area: 212,
                  number: '285.38.11',
                },
                {
                  tlf_id: 2,
                  order: 2,
                  cod_country: 58,
                  cod_area: 212,
                  number: '285.16.92',
                },
                {
                  tlf_id: 3,
                  order: 3,
                  cod_country: 58,
                  cod_area: 212,
                  number: '285.21.30',
                },
              ]
            }
          ]
        }
      ],
    }];
  }

}
