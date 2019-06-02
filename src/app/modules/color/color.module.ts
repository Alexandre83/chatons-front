import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { ColorRoutingModule } from './color-routing.module';
import { ColorFormComponent } from './containers/pages/color-form/color-form.component';
import { ColorListComponent } from './containers/pages/color-list/color-list.component';

@NgModule({
    declarations: [ColorListComponent, ColorFormComponent],
    imports: [CommonModule, ColorRoutingModule, MaterialModule],
})
export class ColorModule {}
