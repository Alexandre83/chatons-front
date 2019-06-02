import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { BreedRoutingModule } from './breed-routing.module';
import { BreedComponent } from './containers/blocs/breed/breed.component';
import { BreedFormComponent } from './containers/pages/breed-form/breed-form.component';
import { BreedListComponent } from './containers/pages/breed-list/breed-list.component';
import { BreedService } from './services/breed.service';

@NgModule({
    declarations: [BreedListComponent, BreedFormComponent, BreedComponent],
    imports: [CommonModule, BreedRoutingModule, MaterialModule],
    providers: [BreedService],
})
export class BreedModule {}
