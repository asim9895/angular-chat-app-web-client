import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  token: any;

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.postForm = this.fb.group({
      post: ['', Validators.required],
    });
  }

  post_form() {
    console.log(this.postForm.value);
    this.postService.add_post(this.postForm.value).subscribe(
      (data) => {
        if (data.message === 'success') {
          this.toast.success('Post Uploaded Successfully');
          this.postForm.reset();
          this.router.navigate(['/streams']);
        }
      },
      (err) => {
        console.log(err);
        return this.toast.error(err?.error.error[0]?.msg, 'Upload Error');
      }
    );
  }
}
