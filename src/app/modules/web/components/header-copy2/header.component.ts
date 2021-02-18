import { Component, OnInit } from '@angular/core';
// import Swiper from 'swiper';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgUrl = './assets/fondo_banner.jpg';
  constructor() { }
  ngOnInit(): void {

    const swiper = new Swiper('.swiper-container', {
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      slidesPerView: 1,
      spaceBetween: 0,
      speed:500,
      loop: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      // preloadImages: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


  }


}
