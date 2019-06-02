import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RestService } from '../../rest/models/rest-service';
import { Chaton } from '../models/chaton.model';

@Injectable({
    providedIn: 'root',
})
export class ChatonService extends RestService<Chaton> {
    constructor(protected http: HttpClient) {
        super(http, 'chaton', Chaton);
    }
}
