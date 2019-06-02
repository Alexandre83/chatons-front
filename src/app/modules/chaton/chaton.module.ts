import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { ChatonRoutingModule } from './chaton-routing.module';
import { ChatonFormComponent } from './containers/pages/chaton-form/chaton-form.component';
import { ChatonListComponent } from './containers/pages/chaton-list/chaton-list.component';
import { ChatonSingleComponent } from './containers/pages/chaton-single/chaton-single.component';

@NgModule({
    declarations: [ChatonListComponent, ChatonSingleComponent, ChatonFormComponent],
    imports: [CommonModule, ChatonRoutingModule, MaterialModule],
})
export class ChatonModule {}
