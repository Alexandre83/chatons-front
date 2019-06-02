import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserModule } from '../modules/user/user.module';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, UserModule],
    exports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, UserModule],
})
export class SharedModule {}
