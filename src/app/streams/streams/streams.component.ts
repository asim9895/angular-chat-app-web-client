import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import * as UserActions from '../../actions/users.actions';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  token: any;
  user: any;
  constructor(
    public tokenService: TokenService,
    public router: Router,
    public authService: AuthService,
    public store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.get_token();
    console.log(this.token);
    this.get_current_user();
  }

  get_current_user() {
    this.authService.curent_user({}).subscribe((data) => {
      console.log(data);
      this.user = data;
      this.store.dispatch(new UserActions.SaveUser(data.user));
    });
  }

  public logout() {
    this.tokenService.delete_token();
    this.router.navigate(['/']);
    console.log('hello');
  }
}
