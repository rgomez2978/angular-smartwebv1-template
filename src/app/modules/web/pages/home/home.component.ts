import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contenHome: any = [];

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
    this.contenHome = [
      {
        header: [
          {
            hs_id: 1,
            background: './assets/fondo_banner.jpg',
            image: './assets/home/img_banner_home.png',
            title: 'Soluciones rápidas',
            title2: '¡para tu negocio!',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
            order: 1,
            buttons: [
              {
                btn_id: 1,
                type: 'active',
                name: 'empezar',
                link: '/privacy',
                order: 1,
              },
              {
                btn_id: 2,
                type: 'normal',
                name: 'demostración',
                link: '/related',
                order: 2,
              },
            ],
          },
          {
            hs_id: 2,
            background: './assets/fondo_banner.jpg',
            image: './assets/home/img_banner_home2.png',
            title: 'Soluciones rápidas',
            title2: '¡para tu negocio2!',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt ut labore.',
            order: 2,
            buttons: [
              {
                btn_id: 1,
                type: 'active',
                name: 'empezar2',
                link: '/privacy',
                order: 1,
              },
              {
                btn_id: 2,
                type: 'normal',
                name: 'demostración2',
                link: '/related',
                order: 2,
              },
            ],
          },
        ],
        applications: [
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
                        title: 'SmartErp',
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
                id_prod: 3,
                order: 3,
                name: 'SmartChat',
                hidden: true,
                description: [
                  {
                    cta: [
                      {
                        cta_id: 1,
                        location: 'left',
                        title: 'SmartChat',
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
                id_prod: 4,
                order: 4,
                name: 'SmartProcess',
                hidden: true,
                description: [
                  {
                    cta: [
                      {
                        cta_id: 1,
                        location: 'left',
                        title: 'SmartProcess',
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
                id_prod: 4,
                order: 4,
                name: 'SmartWork',
                hidden: true,
                description: [
                  {
                    cta: [
                      {
                        cta_id: 1,
                        location: 'left',
                        title: 'SmartWork',
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
        cta: [
          {
            cta_id: 1,
            location: 'left',
            title: 'Visita nuestras redes sociales',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
            background: '',
            image: './assets/home/redes.png',
            order: 1,
            features: [],
            buttons: [],
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
          },
        ],
        carousel: [
          {
            cc_id: 1,
            image: './assets/clients/client-1.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 1,
          },
          {
            cc_id: 2,
            image: './assets/clients/client-2.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 2,
          },
          {
            cc_id: 3,
            image: './assets/clients/client-3.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 3,
          },
          {
            cc_id: 4,
            image: './assets/clients/client-4.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 4,
          },
          {
            cc_id: 5,
            image: './assets/clients/client-5.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 5,
          },
          {
            cc_id: 6,
            image: './assets/clients/client-3.png',
            icon: '',
            title: '',
            description: '',
            link: '',
            order: 6,
          },
        ],
      },
    ];
  }
}
