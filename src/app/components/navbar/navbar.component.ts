import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  user_info: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.get_current_user();
    this.store.select('users').subscribe((res) => {
      this.user_info = res?.user;
    });
  }

  get_current_user() {
    this.authService.curent_user({}).subscribe((data) => {
      this.user = data?.user;
    });
  }

  public logout() {
    this.tokenService.delete_token();
    this.router.navigate(['/']);
  }
}
