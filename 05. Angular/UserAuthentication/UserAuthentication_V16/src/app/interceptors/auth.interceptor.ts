import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor called: ", request);
    const token = localStorage.getItem('access_token');
    if(token)
    {
      const clonedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });

      console.log("interceptor added header: ", clonedRequest)
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
