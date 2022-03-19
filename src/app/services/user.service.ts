import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:2300/api/chat-app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  all_users(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/all-users`, body);
  }

  search_users(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/search-users`, body);
  }

  follow_user(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/follow-user`, body);
  }

  unfollow_user(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/unfollow-user`, body);
  }
}
