import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutContainerComponent } from '../layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutContainerComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }