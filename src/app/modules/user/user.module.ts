import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'app/modules/user/services/authentication.service';
import { UserService } from 'app/modules/user/services/user.service';
import { MaterialModule } from '../../shared/material.module';
import { RestModule } from '../rest/rest.module';
import { LoginComponent } from './containers/modals/login/login.component';
import { SignInComponent } from './containers/modals/sign-in/sign-in.component';
import { UserRoutingModule } from './user-routing.module';

/**
 * Manages users and authentication.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
@NgModule({
    imports: [CommonModule, RestModule, UserRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule],
    providers: [
        // Initialize the authentication service
        {
            provide: APP_INITIALIZER,
            useFactory: (authenticationService: AuthenticationService): (() => Promise<any>) => {
                return (): Promise<any> => {
                    return authenticationService.initialize();
                };
            },
            deps: [AuthenticationService],
            multi: true,
        },
        AuthenticationService,
        UserService,
    ],
    declarations: [LoginComponent, SignInComponent],
    entryComponents: [LoginComponent, SignInComponent],
})
export class UserModule {}
