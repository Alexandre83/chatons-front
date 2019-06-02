import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatonListComponent } from './containers/pages/chaton-list/chaton-list.component';

const routes: Routes = [
    {
        path: '',
        component: ChatonListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatonRoutingModule {}
