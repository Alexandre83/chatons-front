import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TokenService } from 'app/modules/rest/services/token.service';
import { User } from 'app/modules/user/models/user';
import { UserService } from 'app/modules/user/services/user.service';

/**
 * Authentication service.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
@Injectable()
export class AuthenticationService {
    /**
     * The current user.
     *
     * @type {BehaviorSubject<User>}
     */
    protected user: BehaviorSubject<User>;

    /**
     * Constructor.
     *
     * @param {HttpClient}   http         Angular HttpClient service.
     * @param {TokenService} tokenService The token service.
     * @param {UserService}  userService  The user service.
     */
    constructor(protected http: HttpClient, protected tokenService: TokenService, protected userService: UserService) {
        this.user = new BehaviorSubject(null);
    }

    /**
     * Initialize the service if a token is already present.
     *
     * @returns {Promise<any>}
     */
    initialize(): Promise<any> {
        return new Promise(resolve => {
            const token = this.tokenService.get();
            if (token) {
                this.validate(token).subscribe(
                    (data: any) => {
                        this.userService.get(data.user).subscribe((user: User) => {
                            this.user.next(user);
                            resolve();
                        });
                    },
                    () => {
                        resolve();
                    },
                );
            } else {
                resolve();
            }
        });
    }

    /**
     * Authenticate an user with its username and password.
     *
     * @param {string} username The username.
     * @param {string} password The password.
     *
     * @returns {Observable<any>}
     */
    authenticate(username: string, password: string): Observable<any> {
        return this.http.post('user/auth/authenticate', { username, password }).pipe(
            map((data: any) => {
                this.tokenService.store(data.token);
                const user = new User();
                user.hydrate(data.user);

                this.user.next(user);

                return data;
            }),
        );
    }

    /**
     * Validate a token and return decoded data.
     *
     * @param {string} token The token to validate.
     *
     * @returns {Observable<any>}
     */
    validate(token: string): Observable<any> {
        return this.http.post('user/auth/validate', { token });
    }

    /**
     * Clear the token and the current user.
     */
    clear(): void {
        this.tokenService.clear();
        this.user.next(null);
    }

    /**
     * Return the current user.
     *
     * @returns {Observable<User>}
     */
    getUser(): Observable<User> {
        return this.user.asObservable();
    }

    /**
     * Register a new User with these parameters
     *
     * @param {string} username
     * @param {string} password
     * @param {string} email
     *
     * @param displayName
     * @return {Observable<any>}
     */
    register(username: string, password: string, email: string, displayName: string): Observable<any> {
        return this.http
            .post('user/auth/register', {
                username,
                password,
                email,
                displayName,
            })
            .pipe(
                map((data: any) => {
                    this.tokenService.store(data.token);
                    const user = new User();
                    user.hydrate(data.user);

                    this.user.next(user);

                    return data;
                }),
            );
    }
}
