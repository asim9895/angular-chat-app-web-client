import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { TokenService } from 'src/app/services/token.service';
import * as UserActions from '../../redux/actions/users.actions';
import io from 'socket.io-client';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  token: any;
  user: any;
  posts: any;
  socket: any;
  constructor(
    public tokenService: TokenService,
    public router: Router,
    public authService: AuthService,
    public store: Store<AppState>,
    public postService: PostService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.token = this.tokenService.get_token();

    this.get_current_user();
    this.get_all_posts();

    this.socket.on('refreshPage', () => {
      this.get_all_posts();
    });
  }

  get_all_posts() {
    this.postService.all_posts({}).subscribe((data) => {
      this.posts = data?.posts;
      console.log(data);
    });
  }

  get_current_user() {
    this.authService.curent_user({}).subscribe((data) => {
      this.user = data;
      this.store.dispatch(new UserActions.SaveUser(data.user));
    });
  }
}
