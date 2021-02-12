import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, AboutUsComponent, ProductsComponent, ClientsComponent, PartnersComponent, NewsComponent, ContactsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
