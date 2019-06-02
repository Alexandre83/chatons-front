import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'chatons-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    signinForm: FormGroup;

    constructor(
        public authService: AuthenticationService,
        private toast: MatSnackBar,
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signinForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            displayName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    getErrorMessage(input: string) {
        return this.signinForm.hasError('required', [input])
            ? 'Ce champ est obligatoire'
            : this.signinForm.hasError('required', [input])
            ? 'Veuillez rentrer un email valide'
            : '';
    }

    onSubmit() {
        const username = this.signinForm.get('username').value;
        const password = this.signinForm.get('password').value;
        const email = this.signinForm.get('email').value;
        const displayName = this.signinForm.get('displayName').value;

        this.authService.register(username, password, email, displayName).subscribe(
            () => {
                this.dialog.closeAll();
            },
            error => {
                switch (error.status) {
                    case 422:
                        this.toast.open('Nom d\'utilisateur ou email déjà pris', null, { duration: 4000 });
                        break;
                    default:
                        this.toast.open('Erreur inconnue', null, { duration: 4000 });
                        break;
                }
            },
        );
    }
}
