import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Array of routes
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
