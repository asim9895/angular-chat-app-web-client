import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:2300/api/chat-app';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  add_post(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/add-post`, body);
  }
  all_posts(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/all-posts`, body);
  }
}
