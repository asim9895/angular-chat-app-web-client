import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  route: any;
  user: any;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route = this.router.url;

    this.store.select('users').subscribe((res) => {
      this.user = res?.user;
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
    return this.router.navigate(['notifications']);
  }
}
