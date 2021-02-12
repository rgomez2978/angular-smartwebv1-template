import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [{ path: '', component: WebComponent }, { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
