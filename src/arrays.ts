// ########################################################################################
// ## NAVBAR
// ########################################################################################
// condicional recibiendo parametros type (normal - mobile - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente con la data en texto e imagenes
// - caso normal
//     - name
//     - link
// - caso mobile
//     - icon
//     - name
//     - link
//     - socials
//         - cargar componente socials
// -----------------------------------------------------
// NAVBAR - Arreglo final
// -----------------------------------------------------
this.navbar = [
    {
        nav_id: 1,
        name: 'Inicio',
        link: '/web/home',
        icon: 'fas fa-home',
        order: 1
    },
    {
        nav_id: 2,
        name: 'Nosotros',
        link: '/web/about-us',
        icon: 'fas fa-address-card',
        order: 2
    },
    {
        nav_id: 3,
        name: 'Productos',
        link: '/web/products',
        icon: 'fab fa-artstation',
        order: 3
    }, {
        nav_id: 4,
        name: 'Clientes',
        link: '/web/clients',
        icon: 'fas fa-user-tag',
        order: 4
    }, {
        nav_id: 5,
        name: 'Aliados',
        link: '/web/partners',
        icon: 'fas fa-people-arrows',
        order: 5
    }, {
        nav_id: 6,
        name: 'News',
        link: '/web/news',
        icon: 'far fa-newspaper',
        order: 6
    }, {
        nav_id: 7,
        name: 'Contactos',
        link: '/web/contacts',
        icon: 'fas fa-envelope-open-text',
        order: 7
    },
];


// ########################################################################################
// ## HEADER
// ########################################################################################
// condicional para el home y para paginas internas recibiendo parametros type (normal - animate - contactos - arreglo de estructura)
// - recibiendo un arreglo con una sola opcion desde el componente la data en texto e imagenes
// - botones y enlaces
// - velocidad de animacion
// - en caso contactos
//     - direccion de goggle maps
//     - telefonos
//     - correos
//     - componente socials unicolor
// -----------------------------------------------------
// HEADER - Arreglo final
// -----------------------------------------------------
this.header = [
    {
        hed_id: 1,
        title: 'ACERCA DE NOSOTROS',
        description: 'Contamos con la experiencia necesaria para brindar servicios en organizaciones como la suya, a fin de planificar, implementar y administrar soluciones digitales multiplataforma personalizadas.',
        background: '',
        image: '',
        gmap: '',
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'boton 1',
                link: '',
                order: 1
            },
            {
                btn_id: 2,
                type: 'normal',
                name: 'boton 2',
                link: '',
                order: 2
            },
        ],
        emails: [
            {
                email_id: 1,
                name: 'correo@hidrocaven.com',
                order: 1,
            },
            {
                email_id: 2,
                name: 'correo@hidrocaven.com',
                order: 2,
            },
        ],
        phones: [
            {
                phone_id: 1,
                icon: '',
                number: '+58 (212) 285.38.11',
                order: 1,
            },
            {
                phone_id: 2,
                icon: '',
                number: '+58 (212) 285.16.92',
                order: 2,
            },
        ]
    },
];


// ########################################################################################
// ## CAROUSEL
// ########################################################################################
// condicional para cargar informacion de (clientes y distribuidores) recibiendo parametros type (clientes - testimonials - services - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - velocidad de animacion
// - caso clientes
//     - imagen
//     - description
//     - link
// - caso services
//     - icono
//     - title
//     - description
//     - link
// - caso testimonials
//     - description
//     - name
// -----------------------------------------------------
// CAROUSEL - Arreglo final
// -----------------------------------------------------
this.carousel = [
    {
        car_id: 1,
        image: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 1
    },
    {
        car_id: 2,
        image: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 2
    },
];


// ########################################################################################
// ## CAll-TO-ACTION
// ########################################################################################
// condicional para contenidos con imagenes a la izquierda y a la derecha recibiendo parametros type (left - right - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - title
// - description
// - button
//     - description
//     - type (normal - active)
//     - link
// - items
//     - icon
//     - description
// -----------------------------------------------------
// CALL TO ACTION - Arreglo final
// -----------------------------------------------------
this.cta = [
    {
        cta_id: 1,
        title: '',
        description: '',
        background: '',
        image: '',
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'boton 1',
                link: '',
                order: 1
            },
            {
                btn_id: 2,
                type: 'normal',
                name: 'boton 2',
                link: '',
                order: 2

            },
        ],
    },
];


// ########################################################################################
// ## PROMOTIONS
// ########################################################################################
// condicional para cargar informacion con  parametros (left - right - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - title
// - description
// - imagen offer
// - imgagen producto
// - button
//     - description
//     - type (normal - active)
//     - link
// - items
//     - icon
//     - description
// -----------------------------------------------------
// PROMOTIONS - Arreglo final
// -----------------------------------------------------
this.promotions = [
    {
        promo_id: 1,
        title: '',
        description: '',
        background: '',
        image: '',
        img_offer: '',
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'boton 1',
                link: '',
                order: 1
            },
            {
                btn_id: 2,
                type: 'normal',
                name: 'boton 2',
                link: '',
                order: 2

            },
        ],
    },
];


// ########################################################################################
// ## TABS - OURVALUES
// ########################################################################################
// condicional para caragar informacion dentro de tabs (left - right - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - Cargar componente call-to-action (left-right)
//   - parrafo con imagenes
//   - viñetas (activas, con texto, e iconos)
//   - botones y enlaces a web si lo requiere
// - cargar componente carousel (service) con los servicios del producto.
// - cargar componente obj-media (videos)
// -----------------------------------------------------
// TABS - OURVALUES - Arreglo final
// -----------------------------------------------------
this.tabsOurValues = [
    {
        tbval_id: 1,
        title: 'Confianza',
        description: 'Confiamos en nuestra capacidad para desarrollarnos, alcanzar altos niveles de excelencia y, en equipo, llegar más lejos. Desde ahí, construimos nuestras relaciones comerciales y profesionales. ',
        background: '',
        image: '',
        order: 1,
    },
    {
        tbval_id: 2,
        title: 'Oportunidad',
        description: 'Reconociendo un mundo cambiante, con actitud positiva identificamos las oportunidades detrás de los obstáculos, sobre todo en los momentos difíciles, y nos comprometemos a superar las expectativas de nuestros clientes.',
        background: '',
        image: '',
        order: 2,
    },
    {
        tbval_id: 3,
        title: 'Proactividad',
        description: 'Generamos ideas innovadoras para nuestros clientes y los ayudamos a hacerlas realidad. Seleccionamos aquellas que aportan mayor valor, tomamos la iniciativa y asumimos la responsabilidad de hacer que las cosas sucedan.',
        background: '',
        image: '',
        order: 3,
    },
    {
        tbval_id: 4,
        title: 'Excelencia',
        description: 'Estamos comprometidos con ir siempre un paso más allá y superar nuestro nivel de calidad previo en cada actividad que desarrollamos. Nuestro compromiso es superar las expectativas de nuestros clientes.',
        background: '',
        image: '',
        order: 4,
    },
    {
        tbval_id: 5,
        title: 'Perseverancia',
        description: 'Avanzamos firmemente hacia el logro de nuestros objetivos y buscamos diferentes caminos hasta lograrlos. Nos proponemos acompañar a nuestros clientes para juntos alcanzar resultados excepcionales.',
        background: '',
        image: '',
        order: 5,
    },
];


// TABS PRODUCTS-  - Arreglo final
this.tabsProducts = [
    {
        tbprod_id: 1,
        title: 'SmartConnect',
        description: '',
        background: '',
        image: '',
        order: 1,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'boton 1',
                link: '',
                order: 1
            },
            {
                btn_id: 2,
                type: 'normal',
                name: 'boton 2',
                link: '',
                order: 2

            },
        ],
        services: [
            {
                car_id: 1,
                image: '',
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 1
            },
            {
                car_id: 2,
                image: '',
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 2
            },
        ],
        media: [

        ]
    },
];



// ########################################################################################
// ## TABS-APP
// ########################################################################################
// condicional para cargar informacion dentro de tabs (arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// -img central
// -items
//     - icono
//     - title
//     - description
// - store
//     - img url
//     - name
//     - link
// -----------------------------------------------------
// TABS-APP - Arreglo final
// -----------------------------------------------------
this.tabsApplications = [
    {
        tbapp_id: 1,
        title: 'SmartConnect',
        description: '',
        background: '',
        image: '',
        order: 1,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        store: [
            {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }, {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }
        ],
    },
    {
        tbapp_id: 2,
        title: 'SmartERP',
        description: '',
        background: '',
        image: '',
        order: 2,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        store: [
            {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }, {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }
        ],
    },
    {
        tbapp_id: 3,
        title: 'SmartChart',
        description: '',
        background: '',
        image: '',
        order: 3,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        store: [
            {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }, {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }
        ],
    },
    {
        tbapp_id: 4,
        title: 'SmartProccess',
        description: '',
        background: '',
        image: '',
        order: 4,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        store: [
            {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }, {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }
        ],
    },
    {
        tbapp_id: 5,
        title: 'SmartWork',
        description: '',
        background: '',
        image: '',
        order: 5,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        store: [
            {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }, {
                st_id: 1,
                image: '',
                name: 'store 1',
                description: '',
                link: '',
                order: 1
            }
        ],
    },
];


// -----------------------------------------------------
//  SOCIALS-  - Arreglo final
// -----------------------------------------------------
this.iconSocials = [
    {
      is_id: 1,
      icon: 'fab fa-facebook-square',
      title: 'facebook',
      description: 'facebook',
      link: 'https://www.facebook.com/',
      order: 1,
    },
    {
      is_id: 2,
      icon: 'fab fa-twitter-square',
      title: 'twitter',
      description: 'twitter',
      link: 'https://twitter.com/',
      order: 2,
    },
    {
      is_id: 3,
      icon: 'fab fa-instagram',
      title: 'instagram',
      description: 'instagram',
      link: 'https://www.instagram.com/',
      order: 3,
    },
    {
      is_id: 4,
      icon: 'fab fa-whatsapp',
      title: 'whatsapp',
      description: 'whatsapp',
      link: 'https://www.whatsapp.com/',
      order: 4,
    },
    {
      is_id: 5,
      icon: 'fab fa-linkedin',
      title: 'linkedin',
      description: 'linkedin',
      link: 'https://es.linkedin.com/',
      order: 5,
    },
    {
      is_id: 6,
      icon: 'fab fa-youtube-square',
      title: 'youtube',
      description: 'youtube',
      link: 'https://www.youtube.com/',
      order: 6,
    },
];



// ########################################################################################
// ## FLOAT-BUTTON
// ########################################################################################
// condicional para cargar informacion de los botone flotantes (arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - nombre de red
//     - iconos
//     - color
//     - size
//     - color hover, active
//     - enlaces
//     - telefono
//     - api de la red
// -----------------------------------------------------
//  FLOAT-BUTTON - Arreglo final
// -----------------------------------------------------
this.buttonFloat = [
    {
        bf_id: 1,
        icon: '',
        color: '',
        background: '',
        background_hover: '',
        title: '',
        description: '',
        size: '',
        link: '',
        order: 1,
    },
    {
        bf_id: 2,
        icon: '',
        color: '',
        background: '',
        background_hover: '',
        title: '',
        description: '',
        size: '',
        link: '',
        order: 2,
    },
];



// ########################################################################################
// ## OBJECT-MEDIA
// ########################################################################################
// condicional para cargar informacion de galerias de videos o imagenes recibiendo parametros  (arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - caso imagen
//     - url imagen
//     - nombre
//     - descripcion
//     - link a contenido
//     - contenido para efecto hover
//     - iconos
// - caso video
//     - url video
//     - nombre
//     - descripcion
//     - link a contenido
//     - contenido para efecto hover
//     - iconos
// -----------------------------------------------------
//  OBJECT-MEDIA - Arreglo final
// -----------------------------------------------------
this.objMedia = [
    {
        om_id: 1,
        type: 'img',
        media_url: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 1,
    },
    {
        om_id: 2,
        type: 'video',
        media_url: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 2,
    },
];



// ########################################################################################
// ## PRICING
// ########################################################################################
// condicional para cargar informacion de los planes recibiendo parametros (arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - plan
//     - nombre o descripcion
//     - color asociado
//     - boton
//         - description
//         - color
//         - link
//     - caracteristicas
//         - icono
//         - descriocion
//     - forma (mensual o anual)
//         - monto
// -----------------------------------------------------
//  PRICING - Arreglo final
// -----------------------------------------------------
this.pricing = [
    {
        pri_id: 1,
        title: 'Básico',
        description: '',
        background: '',
        color: '',
        image: '',
        price_m: '$10,99',
        price_y: '$129,99',
        order: 1,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'Comprar ahora',
                background: '',
                color: '',
                link: '',
                order: 1
            },
        ],
    },
    {
        pri_id: 2,
        title: 'Avanzado',
        description: '',
        background: '',
        color: '',
        image: '',
        price_m: '$20,99',
        price_y: '$249,99',
        order: 2,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'Comprar ahora',
                background: '',
                color: '',
                link: '',
                order: 1
            },
        ],
    },
    {
        pri_id: 3,
        title: 'empresas',
        description: '',
        background: '',
        color: '',
        image: '',
        price_m: '$40,99',
        price_y: '$489,99',
        order: 3,
        features: [
            {
                f_id: 1,
                icon: '',
                title: 'feature 1',
                description: 'feature 1',
                order: 1
            }, {
                f_id: 2,
                icon: '',
                title: 'feature 2',
                description: 'feature 2',
                order: 2
            },
        ],
        buttons: [
            {
                btn_id: 1,
                type: 'active',
                name: 'Comprar ahora',
                background: '',
                color: '',
                link: '',
                order: 1
            },
        ],
    },
];


// ########################################################################################
// ## SERVICES
// ########################################################################################
// condicional para cargar informacion de los servicios recibiendo parametros (clientes - distribuidores - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - caso cliente (solo imagen)
//     - imagen
//     - name
//     - description
//     - link
// - caso distribuidor
//     - imagen
//     - name
//     - description
//     - link
//     - redes o accesos
// -----------------------------------------------------
//  OBJECT-MEDIA - Arreglo final
// -----------------------------------------------------
this.services = [
    {
        ser_id: 1,
        type: 'client',
        media_url: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 1,
        socials: [
            {
                sn_id: 1,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 1,
            },
            {
                sn_id: 2,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 2,
            }, {
                sn_id: 3,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 3,
            },
        ]
    },
    {
        ser_id: 2,
        type: 'client',
        media_url: '',
        icon: '',
        title: '',
        description: '',
        link: '',
        order: 2,
        socials: [
            {
                sn_id: 1,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 1,
            },
            {
                sn_id: 2,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 2,
            }, {
                sn_id: 3,
                icon: '',
                title: '',
                description: '',
                link: '',
                order: 3,
            },
        ]
    },
];



// ########################################################################################
// ## NEWS
// ########################################################################################
// condicional para cargar informacion de las noticias recibiendo parametros (last - others - arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
// - img
//     - url
//     - link
// - category
// - title
// - link
// - date
//     - icon
//     - description
//     - date
// - views
//     - icon
//     - number
// - likes
//     - icon number



// -----------------------------------------------------
//  NEEWS - Arreglo final
// -----------------------------------------------------
this.news = [
    {
        nw_id: 1,
        type: 'last',
        media_url: '',
        link: '',
        category: '',
        title: '',
        description: '',
        order: 1,
        create_date: {
            icon: '',
            date: '',
        },
        views: {
            icon: 'fas fa-eye',
            number: '10',
        },
        like: {
            icon: 'fas fa-heart',
            number: '31',
        },
    },
    {
        nw_id: 2,
        type: 'last',
        media_url: '',
        link: '',
        category: '',
        title: '',
        description: '',
        order: 2,
        create_date: {
            icon: '',
            date: '',
        },
        views: {
            icon: 'fas fa-eye',
            number: '10',
        },
        like: {
            icon: 'fas fa-heart',
            number: '31',
        },
    }, {
        nw_id: 3,
        type: 'last',
        media_url: '',
        link: '',
        category: '',
        title: '',
        description: '',
        order: 3,
        create_date: {
            icon: '',
            date: '',
        },
        views: {
            icon: 'fas fa-eye',
            number: '10',
        },
        like: {
            icon: 'fas fa-heart',
            number: '31',
        },
    },{
        nw_id: 4,
        type: 'others',
        media_url: '',
        link: '',
        category: '',
        title: '',
        description: '',
        order: 4,
        create_date: {
            icon: '',
            date: '',
        },
        views: {
            icon: 'fas fa-eye',
            number: '10',
        },
        like: {
            icon: 'fas fa-heart',
            number: '31',
        },
    },{
        nw_id: 5,
        type: 'others',
        media_url: '',
        link: '',
        category: '',
        title: '',
        description: '',
        order: 5,
        create_date: {
            icon: '',
            date: '',
        },
        views: {
            icon: 'fas fa-eye',
            number: '10',
        },
        like: {
            icon: 'fas fa-heart',
            number: '31',
        },
    }
];

// ########################################################################################
// ## TOOLBAR
// ########################################################################################
// condicional para cargar informacion de las noticias recibiendo parametros (arreglo de estructura)
// - recibiendo un arreglo con multiples opciones desde el componente la data en texto e imagenes
this.footerList = [
    {
      fo_id: 1,
      description: 'Políticas de privacidad',
      link: '/privacy',
      order: 1,
    },
    {
      fo_id: 2,
      description: 'Términos legales',
      link: '/terms',
      order: 2,
    },
    {
      fo_id: 3,
      description: 'Sitios relacionados',
      link: '/related',
      order: 3,
    },
    {
      fo_id: 4,
      description: 'Mapa del sitio',
      link: '/sitemap',
      order: 4,
    },
  ];







