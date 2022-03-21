import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  saved: any = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe((res) => {
      this.saved = res?.user?.saved.map((s: any) => {
        return {
          ...s.post,
          createdAt: s.createdAt,
        };
      });

      console.log(res?.user?.saved);
    });
  }
}
