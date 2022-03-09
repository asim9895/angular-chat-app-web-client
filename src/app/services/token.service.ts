import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  set_token(token: any) {
    this.cookieService.put('auth_token', token);
  }

  get_token() {
    return this.cookieService.get('auth_token');
  }

  delete_token() {
    this.cookieService.remove('auth_token');
  }
}
