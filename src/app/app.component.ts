import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { AuthService } from './services/auth.service';
import * as UserActions from '../app/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-chat-app';
  user: any;

  constructor(public authService: AuthService, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.get_current_user();
  }

  get_current_user() {
    this.authService.curent_user({}).subscribe((data) => {
      this.user = data;
      this.store.dispatch(new UserActions.SaveUser(data.user));
    });
  }
}
