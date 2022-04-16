import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:2300/api/chat-app';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) {}

  send_message(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/send-message`, body);
  }

  all_chat_messages(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/all-chat-messages`, body);
  }
}
