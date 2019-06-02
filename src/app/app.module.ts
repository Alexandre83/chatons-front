import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [BootstrapComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
    bootstrap: [BootstrapComponent],
})
export class AppModule {}
