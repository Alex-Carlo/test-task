import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banners/banner.component';
import { AdsCardComponent } from './banners/banners-cards/ads-card/ads-card.component';
import { CategoriesCardComponent } from './banners/banners-cards/categories-card/categories-card.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ReviewCardComponent } from './highlights/review-card/review-card.component';
import { OrdersComponent } from './orders/orders.component';
import { TopPerksComponent } from './top-perks/top-perks.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        BannerComponent,
        AdsCardComponent,
        CategoriesCardComponent,
        AboutUsComponent,
        HighlightsComponent,
        ReviewCardComponent,
        TopPerksComponent,
        OrdersComponent,
        ShopProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        BannerComponent,
        AboutUsComponent,
        HighlightsComponent,
        TopPerksComponent,
        OrdersComponent,
        ShopProductsComponent
    ],
    providers: [],
})
export class ComponentModule { }
