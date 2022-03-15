import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}