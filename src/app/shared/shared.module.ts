import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav-bar/nav.component';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter/filter-bar.component';
import { CardProductComponent } from './card-product/card-product.component';



@NgModule({
    declarations: [
        FooterComponent,
        NavComponent,
        FilterBarComponent,
        CardProductComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FooterComponent,
        NavComponent,
        FilterBarComponent,
        CardProductComponent
    ],
    providers: [],
})
export class SharedModule { }
