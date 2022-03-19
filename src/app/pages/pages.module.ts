import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FollowersComponent } from './followers/followers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { PeopleComponent } from './people/people.component';
import { PhotosComponent } from './photos/photos.component';
import { SingleStreamComponent } from './single-stream/single-stream.component';
import { StreamsComponent } from './streams/streams.component';
import { ExploreComponent } from './explore/explore.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FollowersComponent,
    FollowersComponent,
    RegisterComponent,
    NotificationsComponent,
    PeopleComponent,
    PhotosComponent,
    SingleStreamComponent,
    StreamsComponent,
    ExploreComponent,
    ChatsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
