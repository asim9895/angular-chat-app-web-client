import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatsComponent } from './chats/chats/chats.component';
import { ExploreComponent } from './explore/explore/explore.component';
import { FollowersComponent } from './followers/followers/followers.component';
import { FollowingComponent } from './following/following/following.component';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { PeopleComponent } from './people/people/people.component';
import { PhotosComponent } from './photos/photos/photos.component';
import { AuthGuard } from './services/auth.guard';
import { SingleStreamComponent } from './streams/single-stream/single-stream.component';
import { StreamsComponent } from './streams/streams/streams.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stream/:id',
    component: SingleStreamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'explore',
    component: ExploreComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'people',
    component: PeopleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'followers',
    component: FollowersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'following',
    component: FollowingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chats',
    component: ChatsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'photos',
    component: PhotosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
