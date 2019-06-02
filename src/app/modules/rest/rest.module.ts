import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { TokenService } from './services/token.service';

/**
 * The Rest module contains utilities to manage REST entities.
 *
 * @author Alexandre Vignon <alexandre.vignon@ynov.com>
 */
@NgModule({
    imports: [CommonModule, HttpClientModule],
    exports: [HttpClientModule],
    providers: [
        TokenService,
        // Add API url to each requests
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true,
        },
        // Inject token in request headers
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
})
export class RestModule {}
