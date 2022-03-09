import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from './streams/streams.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StreamsComponent,
    NavbarComponent,
    SideNavComponent,
    PostFormComponent,
    PostsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [NavbarComponent, StreamsComponent],
})
export class StreamsModule {}
