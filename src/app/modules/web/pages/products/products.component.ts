import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  contentProducts: any = [];

  constructor() {}

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
    this.contentProducts = [
      {
        header: [
          {
            hs_id: 1,
            background: './assets/fondo_banner_intern.jpg',
            image: './assets/products/img_banner_products.png',
            title: 'Productos y',
            title2: 'Servicios',
            description:
              'Trabajamos día a día en perfeccionar nuestro método y en adaptarnos a nuevas tecnologías, enfocnadonos métodos de desarrollo de Software Ágil. Nuestros profesionales cuentan con certificaciones oficiales que avalan su formación en Scrum Master y Scrum Product Owner.',
            order: 1,
            buttons: [],
          },
        ],
        products: [
          {
            items: [
              {
                id_prod: 1,
                order: 1,
                name: 'SmartConnect',
                hidden: false,

                description: [
                  {
                    cta: [
                      {
                        cta_id: 1,
                        location: 'right',
                        title: 'SmartConnect',
                        description:
                          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                        background: '',
                        image: './assets/products/img_cta_products.png',
                        order: 1,
                        features: [
                          {
                            f_id: 1,
                            description: 'Lorem ipsum dolor sit amet.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 1,
                          },
                          {
                            f_id: 2,
                            description: 'magna aliquyam erat.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 2,
                          },
                          {
                            f_id: 3,
                            description: 'sed diam voluptua.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 3,
                          },
                          {
                            f_id: 4,
                            description: 'diam nonumy eirmod tempor invidunt.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 4,
                          },
                        ],
                        socials: [],
                        buttons: [],
                      },
                    ],
                    services: [
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 1,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 2,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 3,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 4,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 5,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 6,
                      },
                    ],
                    media: [],
                    pricings: [],
                    promotions: [
                      {
                        promo_id: 1,
                        location: 'left',
                        title: 'Promoción',
                        title2: 'smartconnect',
                        description:
                          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                        background: '',
                        image:
                          './assets/products/promotions/banner_promo_img.png',
                        order: 1,
                        features: [
                          {
                            f_id: 1,
                            description: 'Lorem ipsum dolor sit amet.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 1,
                          },
                          {
                            f_id: 2,
                            description: 'magna aliquyam erat.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 2,
                          },
                          {
                            f_id: 3,
                            description: 'sed diam voluptua.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 3,
                          },
                          {
                            f_id: 4,
                            description: 'diam nonumy eirmod tempor invidunt.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 4,
                          },
                        ],
                        socials: [],
                        buttons: [],
                        carousel: [
                          {
                            promo_c_id: 1,
                            order: 1,
                            title: 'valor 1',
                            image:
                              './assets/products/promotions/banner_promo.jpg',
                          },
                          {
                            promo_c_id: 2,
                            order: 2,
                            title: 'valor 2',
                            image:
                              './assets/products/promotions/banner_promo2.jpg',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id_prod: 2,
                order: 2,
                name: 'SmartErp',
                hidden: true,
                description: [
                  {
                    cta: [
                      {
                        cta_id: 1,
                        location: 'left',
                        title: 'SmartConnect',
                        description:
                          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                        background: '',
                        image: './assets/products/img_cta_products.png',
                        order: 1,
                        features: [
                          {
                            f_id: 1,
                            description: 'Lorem ipsum dolor sit amet.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 1,
                          },
                          {
                            f_id: 2,
                            description: 'magna aliquyam erat.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 2,
                          },
                          {
                            f_id: 3,
                            description: 'sed diam voluptua.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 3,
                          },
                          {
                            f_id: 4,
                            description: 'diam nonumy eirmod tempor invidunt.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 4,
                          },
                        ],
                        socials: [],
                        buttons: [],
                      },
                    ],
                    services: [
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 1,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 2,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 3,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 4,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 5,
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
                          description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodsadsdasd asdasdas dsadas sdas sad asdasd assadas dsadasdasd.',
                          size: 'text-md',
                        },
                        order: 6,
                      },
                    ],
                    media: [],
                    pricings: [],
                    promotions: [
                      {
                        promo_id: 1,
                        location: 'left',
                        title: 'Promoción',
                        title2: 'smartconnect',
                        description:
                          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                        background: '',
                        image:
                          './assets/products/promotions/banner_promo_img.png',
                        order: 1,
                        features: [
                          {
                            f_id: 1,
                            description: 'Lorem ipsum dolor sit amet.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 1,
                          },
                          {
                            f_id: 2,
                            description: 'magna aliquyam erat.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 2,
                          },
                          {
                            f_id: 3,
                            description: 'sed diam voluptua.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 3,
                          },
                          {
                            f_id: 4,
                            description: 'diam nonumy eirmod tempor invidunt.',
                            icon: {
                              name: 'fas fa-check-circle',
                            },
                            order: 4,
                          },
                        ],
                        socials: [],
                        buttons: [],
                        carousel: [
                          {
                            promo_c_id: 1,
                            order: 1,
                            title: 'valor 1',
                            image:
                              './assets/products/promotions/banner_promo.jpg',
                          },
                          {
                            promo_c_id: 2,
                            order: 2,
                            title: 'valor 2',
                            image:
                              './assets/products/promotions/banner_promo2.jpg',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
