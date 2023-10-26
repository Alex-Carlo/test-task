import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banners/banner.component';
import { AdsCardComponent } from './banners/banners-cards/ads-card/ads-card.component';
import { CategoriesCardComponent } from './banners/banners-cards/categories-card/categories-card.component';



@NgModule({
    declarations: [
        BannerComponent,
        AdsCardComponent,
        CategoriesCardComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BannerComponent,
    ],
    providers: [],
})
export class ComponentModule { }
