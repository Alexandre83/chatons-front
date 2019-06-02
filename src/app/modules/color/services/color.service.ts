import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RestService } from '../../rest/models/rest-service';
import { Color } from '../models/color.model';

@Injectable({
    providedIn: 'root',
})
export class ColorService extends RestService<Color> {
    constructor(protected http: HttpClient) {
        super(http, 'color', Color);
    }
}
