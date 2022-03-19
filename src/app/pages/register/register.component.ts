import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
        if (data.message === 'success') {
          this.toast.success('Registeration Successful');
          this.registerForm.reset();
          this.router.navigate(['/']);
        }
      },
      (err) => {
        console.log(err?.error.error[0]?.msg);
        return this.toast.error(
          err?.error.error[0]?.msg,
          'Authentication Error'
        );
      }
    );
  }
}
