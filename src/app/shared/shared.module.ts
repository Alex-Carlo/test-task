import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardProductComponent } from './card-product/card-product.component';
import { FilterBarComponent } from './filter/filter-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav-bar/nav.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        FilterBarComponent,
        CardProductComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FooterComponent,
        NavComponent,
        FilterBarComponent,
        CardProductComponent,
        SliderComponent
    ],
    providers: [],
})
export class SharedModule { }
