import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginComponent } from '../modules/user/containers/modals/login/login.component';
import { SignInComponent } from '../modules/user/containers/modals/sign-in/sign-in.component';
import { User } from '../modules/user/models/user';
import { AuthenticationService } from '../modules/user/services/authentication.service';

@Component({
    selector: 'chatons-bootstrap',
    templateUrl: './bootstrap.component.html',
    styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent implements OnInit {
    user: Observable<User>;

    constructor(private dialog: MatDialog, private authService: AuthenticationService, private router: Router) {
        this.user = this.authService.getUser();
    }

    ngOnInit() {}

    openLogin() {
        this.dialog.open(LoginComponent, {
            width: '450px',
            maxWidth: '100%',
        });
    }

    openSubscribe() {
        this.dialog.open(SignInComponent, {
            width: '450px',
            maxWidth: '100%',
        });
    }

    signOut() {
        this.authService.clear();
        this.router.navigate(['/']);
    }
}
