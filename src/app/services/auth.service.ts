import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:2300/api/chat-app';

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}
interface LoginBody {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(body: RegisterBody): Observable<any> {
    return this.http.post(`${BASE_URL}/register`, body);
  }
  login(body: LoginBody): Observable<any> {
    return this.http.post(`${BASE_URL}/login`, body);
  }
  curent_user(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/current_user`, body);
  }
}
