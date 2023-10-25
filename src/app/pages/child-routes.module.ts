import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';



const childRoutes: Routes = [

  { path: '', component: HomeComponent, data: {titulo: 'Home'} },
  { path: 'products', component: ProductsComponent, data: {titulo: 'Products List'} },
 
]




@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule]
})
export class ChildRoutesModule { }