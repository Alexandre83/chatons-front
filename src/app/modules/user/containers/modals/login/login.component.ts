import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'chatons-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    signinForm: FormGroup;

    constructor(
        public authService: AuthenticationService,
        private toast: MatSnackBar,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private router: Router,
    ) {}

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signinForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    getErrorMessage(input: string) {
        return this.signinForm.hasError('required', [input]) ? 'Ce champ est obligatoire' : '';
    }

    onSubmit() {
        const username = this.signinForm.get('username').value;
        const password = this.signinForm.get('password').value;

        this.authService.authenticate(username, password).subscribe(
            () => {
                this.dialog.closeAll();
                this.router.navigate(['/user/profil']);
            },
            error => {
                switch (error.status) {
                    case 401:
                        this.toast.open('Nom d\'utilisateur ou mot de passe incorrect', null, { duration: 4000 });
                        break;
                    case 404:
                        this.toast.open('Aucun utilisateur trouvé', null, { duration: 4000 });
                        break;
                    default:
                        this.toast.open('Erreur inconnue', null, { duration: 4000 });
                        break;
                }
            },
        );
    }
}
