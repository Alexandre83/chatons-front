import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorListComponent } from './containers/pages/color-list/color-list.component';

const routes: Routes = [
    {
        path: '',
        component: ColorListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ColorRoutingModule {}
