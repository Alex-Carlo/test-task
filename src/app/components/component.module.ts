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



@NgModule({
    declarations: [
        BannerComponent,
        AdsCardComponent,
        CategoriesCardComponent,
        AboutUsComponent,
        HighlightsComponent,
        ReviewCardComponent,
        TopPerksComponent,
        OrdersComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BannerComponent,
        AboutUsComponent,
        HighlightsComponent,
        TopPerksComponent,
        OrdersComponent
    ],
    providers: [],
})
export class ComponentModule { }
