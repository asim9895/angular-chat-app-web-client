import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { AppState } from 'src/app/app.state';
import { UserService } from 'src/app/services/user.service';
import io from 'socket.io-client';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from '../../redux/actions/users.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  users: any = [];
  searchForm: FormGroup;
  searched: boolean = false;
  loading: boolean = false;
  user_info: any;
  socket: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.socket.on('refreshPage', () => {
      this.authService.curent_user({}).subscribe((data) => {
        this.store.dispatch(new UserActions.SaveUser(data.user));
      });
      this.store.select('users').subscribe((res) => {
        this.user_info = res?.user;
        console.log(this.user_info);
      });
    });
    this.store.select('users').subscribe((res) => {
      this.user_info = res?.user;
      console.log(this.user_info);
    });
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
    this.getAllUsers();
  }

  checkArray(arr: any, user: any) {
    console.log(arr);
    console.log(user);
    return _.some(arr, { user: { _id: user } });
  }

  followUser(user: any) {
    this.userService
      .follow_user({ other_user_id: user?._id })
      .subscribe((data) => {
        console.log(data);
        this.socket.emit('refresh', {});
      });
  }

  unfollowUser(user: any) {
    this.userService
      .unfollow_user({ other_user_id: user?._id })
      .subscribe((data) => {
        console.log(data);
        this.socket.emit('refresh', {});
      });
  }

  getAllUsers() {
    this.loading = true;

    this.userService.all_users({}).subscribe((data) => {
      _.remove(data, { username: this.user_info?.username });
      console.log(data);
      this.loading = false;
      this.users = data;
    });
  }

  clearFilter() {
    this.searched = false;
    this.searchForm.reset();
    return this.getAllUsers();
  }

  searchUsers() {
    this.loading = true;
    this.userService
      .search_users({ username: this.searchForm.value.search })
      .subscribe(
        (data) => {
          this.loading = false;
          console.log(data);
          this.users = data;
          this.searched = true;
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
  }
}
