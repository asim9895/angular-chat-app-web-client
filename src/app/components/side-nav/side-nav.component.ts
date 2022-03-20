import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  route: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    this.route = this.router.url;
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
