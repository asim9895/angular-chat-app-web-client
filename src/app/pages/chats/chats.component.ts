import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserService } from 'src/app/services/user.service';
import io from 'socket.io-client';
import * as _ from 'lodash';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from '../../redux/actions/users.actions';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  user_info: any;
  followers: any = [];
  searchForm: FormGroup;
  socket: any;
  loading: boolean = false;
  searched: boolean = false;
  selected_user: any = null;
  sender: boolean = true;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.socket.on('refreshPage', () => {
      this.getCurrentUser();
      this.store.select('users').subscribe((res) => {
        this.user_info = res?.user;
        this.followers = res?.user?.followers;
        console.log(this.followers);
      });
    });
    this.store.select('users').subscribe((res) => {
      this.user_info = res?.user;
      this.followers = res?.user?.followers;
      console.log(this.followers);
    });

    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  setSelectedUser(user: any) {
    this.selected_user = user;
    console.log(this.selected_user);
  }

  checkArray(arr: any, user: any) {
    return _.some(arr, { user: { _id: user } });
  }

  getCurrentUser() {
    this.authService.curent_user({}).subscribe((data) => {
      this.store.dispatch(new UserActions.SaveUser(data.user));
    });
  }

  clearFilter() {
    this.searched = false;
    this.searchForm.reset();
    return this.getCurrentUser();
  }

  searchUsers() {
    this.loading = true;
    this.searched = true;

    this.followers =
      this.user_info?.followers.length > 0 &&
      this.user_info?.followers.filter((f: any) => {
        console.log(f.user?.username);
        this.loading = false;
        return f.user?.username?.match(this.searchForm.value.search);
      });
  }
}
