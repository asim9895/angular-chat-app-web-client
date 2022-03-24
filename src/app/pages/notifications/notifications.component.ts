import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from '../../redux/actions/users.actions';
import io from 'socket.io-client';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  notifications: any = [];
  socket: any;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.getNotifications();
  }
  timeFromNow(time: any) {
    return moment(time).fromNow();
  }

  getNotifications() {
    this.store.select('users').subscribe((res) => {
      this.notifications = res?.user?.notifications;
    });
  }
}
