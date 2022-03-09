import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let token = this.tokenService.get_token();
    if (token) {
      headers['authorization'] = token;
    }
    const _req = req.clone({ setHeaders: headers });
    return next.handle(_req);
  }
}
