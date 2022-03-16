import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { TokenService } from 'src/app/services/token.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import io from 'socket.io-client';
import * as _ from 'lodash';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-stream',
  templateUrl: './single-stream.component.html',
  styleUrls: ['./single-stream.component.css'],
})
export class SingleStreamComponent implements OnInit {
  post_id: any = '';
  post: any;
  user: any;
  socket: any;
  tab: String = 'comments';
  commentForm: FormGroup;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private postService: PostService,
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.socket = io('http://localhost:2300');
  }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
    this.socket.on('refreshPage', () => {
      this.getPostById();
    });
    this.store.select('users').subscribe((res) => {
      this.user = res?.user;
    });
    this.post_id = this.route.snapshot.paramMap.get('id');

    if (this.post_id !== '') {
      this.getPostById();
      console.log(this.post);
    }
  }

  goBack() {
    return this.location.back();
  }

  timeFromNow(time: any) {
    return moment(time).fromNow();
  }

  selectLikesTab() {
    this.tab = 'likes';
  }

  selectCommentsTab() {
    this.tab = 'comments';
  }

  likePost(post: any) {
    this.postService.like_post({ post_id: post?._id }).subscribe((data) => {
      this.socket.emit('refresh', {});
      console.log(data);
      console.log('liked');
    });
  }
  unlikePost(post: any) {
    this.postService.unlike_post({ post_id: post?._id }).subscribe((data) => {
      this.socket.emit('refresh', {});
      console.log(data);
      console.log('not liked');
    });
  }

  checkArray(arr: any, user: any) {
    return _.some(arr, { user: { _id: user } });
  }

  newComment(stream: any) {
    return this.router.navigate(['stream', stream?._id]);
  }

  getPostById() {
    this.postService.post_by_id({ post_id: this.post_id }).subscribe((data) => {
      this.post = data?.post;
      console.log(data);
    });
  }

  comment_form() {
    console.log(this.commentForm.value);
    this.postService
      .add_comment({
        post_id: this.post_id,
        comment: this.commentForm.value.comment,
      })
      .subscribe(
        (data) => {
          if (data.message === 'success') {
            this.toast.success('Comment added Successfully');
            this.socket.emit('refresh', {});
            this.commentForm.reset();
          }
        },
        (err) => {
          console.log(err);
          return this.toast.error(err?.error.error[0]?.msg, 'Upload Error');
        }
      );
  }
}
