import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

// import Swiper from 'swiper/bundle';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() data: any;
  @Input() type: any;

  constructor(private _router: Router) { }

  // Configuracion Header - Slider
  configHeaderSlide: SwiperOptions = {
    direction: 'horizontal',
    preventClicks: false,
    speed: 800,
    loop: false,
    freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: true,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
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



  /**
   * -------------------------------------------------------
   * @summary goTo
   * @description redirecciona a la ruta de cada componete o routerlink
   * -------------------------------------------------------
   */
  goTo(link) {
    console.log('link :>> ', link);
    this._router.navigate([link]);

  }



}
