import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() posts: any = [];

  constructor() {
    console.log(this.posts);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.posts);
    }, 2000);
  }
}
