import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RestService } from 'app/modules/rest/models/rest-service';
import { User } from 'app/modules/user/models/user';

/**
 * User service.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
@Injectable()
export class UserService extends RestService<User> {
    /**
     * Constructor.
     *
     * @param {HttpClient} http Angular HttpClient service.
     */
    constructor(protected http: HttpClient) {
        super(http, 'user', User);
    }
}
