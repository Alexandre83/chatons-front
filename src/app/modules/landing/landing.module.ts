import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { UserModule } from '../user/user.module';
import { HomeComponent } from './containers/pages/home/home.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, LandingRoutingModule, SharedModule, UserModule],
})
export class LandingModule {}
