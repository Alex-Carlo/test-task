import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ComponentModule
    ],
    providers: [],
})
export class PagesModule { }
