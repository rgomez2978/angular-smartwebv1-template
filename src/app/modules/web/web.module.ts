import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { WebRoutingModule } from './web-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { WebComponent } from './web.component';

@NgModule({
  declarations: [WebComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PagesModule,
  ],
  exports: [WebComponent],
  providers: [],
  bootstrap: []
})
export class WebModule { }

