import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {HomepageComponent} from "./layout/homepage/homepage.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";

const routes: Routes = [
  {path:'items', component:ItemOverviewComponent},
  {path:'customers', component:CustomerOverviewComponent},
  {path:'', component:HomepageComponent},
  {path:'items/:name', component:ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
