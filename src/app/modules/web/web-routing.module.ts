import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsPageComponent } from './pages/contacts/contacts-page.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { LegalTermsComponent } from './pages/legal-terms/legal-terms.component';
import { RelatedSitesComponent } from './pages/related-sites/related-sites.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'about', component: AboutUsComponent, },
  { path: 'products', component: ProductsComponent, },
  { path: 'clients', component: ClientsComponent, },
  { path: 'partners', component: PartnersComponent, },
  { path: 'news', component: NewsComponent, },
  { path: 'contacts', component: ContactsPageComponent, },
  { path: 'privacy', component: PrivacyPoliciesComponent },
  { path: 'terms', component: LegalTermsComponent },
  { path: 'related', component: RelatedSitesComponent },
  { path: 'sitemap', component: SiteMapComponent },
  { path: '**', redirectTo: 'home' },
];


// PrivacyPoliciesComponent,
// LegalTermsComponent,
// RelatedSitesComponent,
// SiteMapComponent


// const routes: Routes = [
//   { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
//   { path: '', component: WebComponent },
//   // { path: '**', redirectTo: 'home' },



// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
