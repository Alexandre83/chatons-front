import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Array of routes
 *
 * @author Alexandre VIGNON <alexandre.vignon@ynov.com>
 */
const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/landing/landing.module#LandingModule',
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
    },
    {
        path: 'breed',
        loadChildren: './modules/breed/breed.module#BreedModule',
    },
    {
        path: 'color',
        loadChildren: './modules/color/color.module#ColorModule',
    },
    {
        path: 'chaton',
        loadChildren: './modules/chaton/chaton.module#ChatonModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
