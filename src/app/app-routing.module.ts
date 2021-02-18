import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './modules/web/web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    loadChildren: () => import('./modules/web/web.module').then(m => m.WebModule)
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
