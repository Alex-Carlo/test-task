import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banners/banner.component';
import { AdsCardComponent } from './banners/banners-cards/ads-card/ads-card.component';
import { CategoriesCardComponent } from './banners/banners-cards/categories-card/categories-card.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ReviewCardComponent } from './highlights/review-card/review-card.component';
import { OrdersComponent } from './orders/orders.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PerkCardComponent } from './top-perks/perk-card/perk-card.component';
import { TopPerksComponent } from './top-perks/top-perks.component';



@NgModule({
    declarations: [
        BannerComponent,
        AdsCardComponent,
        CategoriesCardComponent,
        AboutUsComponent,
        HighlightsComponent,
        ReviewCardComponent,
        PerkCardComponent,
        TopPerksComponent,
        OrdersComponent,
        SubscribeComponent,
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
        SubscribeComponent,
        ShopProductsComponent
    ],
    providers: [],
})
export class ComponentModule { }
