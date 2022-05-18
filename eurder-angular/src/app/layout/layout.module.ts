import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { CustomerOverviewComponent } from '../customer-overview/customer-overview.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppModule} from "../app.module";
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {CustomerFilterPipe} from "../customer-filter.pipe";



@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        HomepageComponent,
        ItemDetailComponent,
        CustomerOverviewComponent,
      CustomerFilterPipe
    ],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,

  ]
})
export class LayoutModule { }
