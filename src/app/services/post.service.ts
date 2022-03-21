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

  post_by_id(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/post-by-id`, body);
  }

  like_post(body: any): Observable<any> {
    return this.http.put(`${BASE_URL}/add-like`, body);
  }

  unlike_post(body: any): Observable<any> {
    return this.http.put(`${BASE_URL}/remove-like`, body);
  }

  save_post(body: any): Observable<any> {
    return this.http.put(`${BASE_URL}/save-post`, body);
  }

  unsave_post(body: any): Observable<any> {
    return this.http.put(`${BASE_URL}/unsave-post`, body);
  }

  add_comment(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/add-comment`, body);
  }

  remove_comment(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/remove-comment`, body);
  }
}
