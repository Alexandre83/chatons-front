import { HttpResponse } from '@angular/common/http';

import { RestEntity } from './rest-entity';

/**
 * Response from a search API request.
 *
 * Contains the retrieved rows and the total number of rows if it was a paginated request.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
export class RestSearchResponse<T extends RestEntity> {
    /**
     * Retrieved and hydrated rows.
     *
     * @type {Array<RestEntity>}
     */
    rows: Array<T>;
    /**
     * Total of rows (null if the request wasn't paginated).
     *
     * @type {number}
     */
    total: number;

    /**
     * Grab an HttpRequest to retrieve rows and total.
     *
     * @param {HttpResponse<RestEntity[]>} response The current HttpResponse to parse.
     * @param {RestEntity}                 type     The entity class to instantiate.
     */
    constructor(response: HttpResponse<T[]>, type: new () => T) {
        const rows = response.body;
        const total = response.headers.get('X-REST-TOTAL');

        this.total = parseInt(total, 10) || 0;
        this.rows = rows.map((row: any) => {
            const entity = new type();
            entity.hydrate(row);

            return entity;
        });
    }
}
