import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get JWT token from your authentication service
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      // Clone the request and attach JWT token to the header
      let x = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNTcxNTc5MSwiaWF0IjoxNzE1NzE1NzkxfQ.aJgYL-vGLxD_bTmvKoG2QIxGoBk7mcnx9VpApTTS4hw'
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${x}`
        }
      });
    }

    return next.handle(request);
  }
}
