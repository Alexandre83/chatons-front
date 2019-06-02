import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RestService } from '../../rest/models/rest-service';
import { Breed } from '../models/breed.model';

@Injectable({
    providedIn: 'root',
})
export class BreedService extends RestService<Breed> {
    constructor(protected http: HttpClient) {
        super(http, 'breed', Breed);
    }
}
