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
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
})
export class FollowingComponent implements OnInit {
  user_info: any;
  following: any = [];
  searchForm: FormGroup;
  socket: any;
  loading: boolean = false;
  searched: boolean = false;

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
        this.following = res?.user?.following;
        console.log(this.following);
      });
    });
    this.store.select('users').subscribe((res) => {
      this.user_info = res?.user;
      this.following = res?.user?.following;
      console.log(this.following);
    });

    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  checkArray(arr: any, user: any) {
    return _.some(arr, { user: { _id: user } });
  }

  unfollowUser(user: any) {
    this.userService
      .unfollow_user({ other_user_id: user?.user?._id })
      .subscribe((data) => {
        console.log(data);
        this.socket.emit('refresh', {});
      });
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

    this.following =
      this.user_info?.following.length > 0 &&
      this.user_info?.following.filter((f: any) => {
        console.log(f.user?.username);
        this.loading = false;
        return f.user?.username?.match(this.searchForm.value.search);
      });
  }
}
