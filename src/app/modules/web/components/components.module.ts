import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { TabsComponent } from './tabs/tabs.component';
import { SocialsComponent } from './socials/socials.component';
import { FloatButtonComponent } from './float-button/float-button.component';
import { ObjMediaComponent } from './obj-media/obj-media.component';
import { PricingComponent } from './pricing/pricing.component';
import { TabsAppComponent } from './tabs-app/tabs-app.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoadingComponent } from './loading/loading.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    CallToActionComponent,
    TabsComponent,
    SocialsComponent,
    FloatButtonComponent,
    ObjMediaComponent,
    PricingComponent,
    TabsAppComponent,
    PromotionsComponent,
    ServicesComponent,
    NewsComponent,
    ContactsComponent,
    LoadingComponent,
    TitleHeaderComponent,
    BreadcrumbComponent,

  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    CallToActionComponent,
    TabsComponent,
    SocialsComponent,
    FloatButtonComponent,
    ObjMediaComponent,
    PricingComponent,
    TabsAppComponent,
    PromotionsComponent,
    ServicesComponent,
    NewsComponent,
    ContactsComponent,
    LoadingComponent,
    TitleHeaderComponent
  ]
})
export class ComponentsModule { }
