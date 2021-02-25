import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

// import Swiper from 'swiper/bundle';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() data: any;
  @Input() type: any;
  @Input() words: any;

  constructor(private _router: Router) {}
  // Configuracion Header - Slider
  configHeaderSlide: SwiperOptions = {
    direction: 'horizontal',
    simulateTouch: false,
    preventClicks: false,
    speed: 800,
    loop: true,
    freeMode: true,
    initialSlide: 0,
    autoHeight: true,
    centeredSlides: true,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 6500,
    //   disableOnInteraction: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  ngOnInit(): void {}
}
