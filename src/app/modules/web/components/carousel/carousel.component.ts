import { Component, OnInit, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() data: any;
  @Input() type: any;

  constructor() { }


  // Configuracion carousel - Clientes
  configCarouselClient: SwiperOptions = {
    direction: 'horizontal',
    preventClicks: false,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: false,
    freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
        spaceBetween: -50,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: -40,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: -50,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: -60,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: -50,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: -50,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: -50,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };

  // Configuracion carousel - Promotions
  configCarouselPromotions: SwiperOptions = {
    direction: 'horizontal',
    preventClicks: false,
    speed: 500,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true
    // },
    loop: true,
    // freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };


  // Configuracion carousel - Servicios
  configCarouselService: SwiperOptions = {
    direction: 'horizontal',
    preventClicks: false,
    speed: 500,
    loop: false,
    freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 5,
        spaceBetween: -40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: -40,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: -50,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: -60,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: -50,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: -50,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: -50,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };

  // Configuracion carousel - Tesminios
  configCarouselTestimonial: SwiperOptions = {
    direction: 'horizontal',
    preventClicks: false,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    loop: false,
    freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: false,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: -40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: -40,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: -50,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: -60,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: -50,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: -50,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: -50,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  };



  ngOnInit(): void {
  }

}
