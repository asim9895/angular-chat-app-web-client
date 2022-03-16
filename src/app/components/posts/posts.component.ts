import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import io from 'socket.io-client';
import { PostService } from 'src/app/services/post.service';
import * as _ from 'lodash';
import { TokenService } from 'src/app/services/token.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() posts: any = [];
  socket: any;
  user: any;

  constructor(
    public postService: PostService,
    public tokenService: TokenService,
    private store: Store<AppState>,
    public router: Router
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.store.select('users').subscribe((res) => {
      this.user = res?.user;
    });

    this.socket.on('refreshPage', () => {
      this.posts = this.posts;
    });
  }

  timeFromNow(time: any) {
    return moment(time).fromNow();
  }

  checkArray(arr: any, user: any) {
    return _.some(arr, { user: user });
  }

  likePost(post: any) {
    this.postService.like_post({ post_id: post?._id }).subscribe((data) => {
      this.socket.emit('refresh', {});
    });
  }
  unlikePost(post: any) {
    this.postService.unlike_post({ post_id: post?._id }).subscribe((data) => {
      this.socket.emit('refresh', {});
    });
  }

  newComment(stream: any) {
    return this.router.navigate(['stream', stream?._id]);
  }

  streamNavigate(stream: any) {
    return this.router.navigate(['stream', stream?._id]);
  }
}
