import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedListComponent }   from './containers/pages/breed-list/breed-list.component';

const routes: Routes = [
    {
        path: '',
        component: BreedListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BreedRoutingModule {
}
