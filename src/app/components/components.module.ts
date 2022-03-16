import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    PostFormComponent,
    SideNavComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    PostFormComponent,
    SideNavComponent,
    PostsComponent,
  ],
})
export class ComponentsModule {}
