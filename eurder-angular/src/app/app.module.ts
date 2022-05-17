import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFilterPipe } from './customer-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe,
    CustomerFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  exports: [
    CustomerFilterPipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
