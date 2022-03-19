import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token: any;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.init();

    this.token = this.tokenService.get_token();

    if (this.token) {
      this.router.navigate(['/streams']);
    }
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.tokenService.set_token(data?.token);
        if (data.message === 'success') {
          this.toast.success('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['/streams']);
        }
      },
      (err) => {
        console.log(err?.error.error[0]?.msg);
        return this.toast.error(
          err?.error.error[0]?.msg,
          'Authorization Error'
        );
      }
    );
  }
}
