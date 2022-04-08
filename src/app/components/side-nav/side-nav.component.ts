import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserService } from 'src/app/services/user.service';
import io from 'socket.io-client';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from '../../redux/actions/users.actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  route: any;
  user: any;
  notificationCount: 0;
  socket: any;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.route = this.router.url;

    this.store.select('users').subscribe((res) => {
      this.user = res?.user;
      this.notificationCount = this.user?.notifications.filter((n: any) => {
        return n?.read === false;
      }).length;
    });

    this.socket.on('refreshPage', () => {
      this.notificationCount = this.notificationCount;
      this.authService.curent_user({}).subscribe((data) => {
        this.store.dispatch(new UserActions.SaveUser(data.user));
      });
    });
  }

  pushStream() {
    return this.router.navigate(['streams']);
  }
  pushExplore() {
    return this.router.navigate(['explore']);
  }
  pushSaved() {
    return this.router.navigate(['saved']);
  }
  pushProfile() {
    return this.router.navigate(['profile']);
  }
  pushPeople() {
    return this.router.navigate(['people']);
  }
  pushFollowers() {
    return this.router.navigate(['followers']);
  }
  pushFollowing() {
    return this.router.navigate(['following']);
  }
  pushChats() {
    return this.router.navigate(['chats']);
  }
  pushPhotos() {
    return this.router.navigate(['photos']);
  }

  pushNotifications() {
    this.userService.mark_all_notifications_read({}).subscribe((data) => {
      this.socket.emit('refresh', {});
    });
    return this.router.navigate(['notifications']);
  }
}
