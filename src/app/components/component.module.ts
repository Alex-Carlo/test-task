import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banners/banner.component';



@NgModule({
    declarations: [
        BannerComponent,
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
