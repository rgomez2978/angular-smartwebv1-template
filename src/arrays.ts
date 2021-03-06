
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
//   - vi??etas (activas, con texto, e iconos)
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
        description: 'Confiamos en nuestra capacidad para desarrollarnos, alcanzar altos niveles de excelencia y, en equipo, llegar m??s lejos. Desde ah??, construimos nuestras relaciones comerciales y profesionales. ',
        background: '',
        image: '',
        order: 1,
    },
    {
        tbval_id: 2,
        title: 'Oportunidad',
        description: 'Reconociendo un mundo cambiante, con actitud positiva identificamos las oportunidades detr??s de los obst??culos, sobre todo en los momentos dif??ciles, y nos comprometemos a superar las expectativas de nuestros clientes.',
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
        description: 'Estamos comprometidos con ir siempre un paso m??s all?? y superar nuestro nivel de calidad previo en cada actividad que desarrollamos. Nuestro compromiso es superar las expectativas de nuestros clientes.',
        background: '',
        image: '',
        order: 4,
    },
    {
        tbval_id: 5,
        title: 'Perseverancia',
        description: 'Avanzamos firmemente hacia el logro de nuestros objetivos y buscamos diferentes caminos hasta lograrlos. Nos proponemos acompa??ar a nuestros clientes para juntos alcanzar resultados excepcionales.',
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
        title: 'B??sico',
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






