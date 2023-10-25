import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutContainerComponent } from './layout.component';


@NgModule({
    declarations: [
        LayoutContainerComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    exports: [LayoutContainerComponent]
})

export class LayoutModule { }