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
  imgUrl = './assets/fondo_banner.jpg';
  dataHeaderList: any;

  constructor(private _router: Router) { }

  config: SwiperOptions = {
    speed: 800,
    loop: true,
    // grabCursor: true,
    initialSlide: 1,
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 4
    //   },
    //   500: {
    //     slidesPerView: 3
    //   },
    //   400: {
    //     slidesPerView: 2
    //   },
    //   300: {
    //     slidesPerView: 1
    //   }
    // },
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
    this.dataHeaderList = this.data;
    console.log('this.dataHeaderList :>> ', this.dataHeaderList);
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
