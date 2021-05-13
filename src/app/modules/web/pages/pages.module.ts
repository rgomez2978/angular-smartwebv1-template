import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { WebRoutingModule } from '../web-routing.module';
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { ContactsPageComponent } from './contacts/contacts-page.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { LegalTermsComponent } from './legal-terms/legal-terms.component';
import { RelatedSitesComponent } from './related-sites/related-sites.component';
import { SiteMapComponent } from './site-map/site-map.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ClientsComponent,
    PartnersComponent,
    NewsComponent,
    ContactsPageComponent,
    PrivacyPoliciesComponent,
    LegalTermsComponent,
    RelatedSitesComponent,
    SiteMapComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule,
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ClientsComponent,
    PartnersComponent,
    NewsComponent,
    ContactsPageComponent,
    PrivacyPoliciesComponent,
    LegalTermsComponent,
    RelatedSitesComponent,
    SiteMapComponent
  ]
})
export class PagesModule { }
