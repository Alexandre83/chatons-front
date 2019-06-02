import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

/**
 * Add the environment api URL to http requests.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    /**
     * Interceptor.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler}      next
     *
     * @returns {Observable<HttpEvent<any>>}
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clone = request.clone({
            url: environment.api.url + request.url,
        });
        return next.handle(clone);
    }
}
