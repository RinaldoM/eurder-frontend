import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {HomepageComponent} from "./layout/homepage/homepage.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const routes: Routes = [
  {path:'items', component:ItemOverviewComponent},
  {path:'customers', component:CustomerOverviewComponent},
  {path:'', component:HomepageComponent},
  {path:'items/:id', component:ItemDetailComponent},
  {path:'customers/:id', component:CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
