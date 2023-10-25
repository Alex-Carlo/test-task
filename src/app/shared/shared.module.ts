import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav-bar/nav.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        FooterComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FooterComponent,
        NavComponent
    ],
    providers: [],
})
export class SharedModule { }
