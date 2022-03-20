import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { FollowersComponent } from './pages/followers/followers.component';
import { FollowingComponent } from './pages/following/following.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PeopleComponent } from './pages/people/people.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AuthGuard } from './services/auth.guard';
import { SingleStreamComponent } from './pages/single-stream/single-stream.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { SavedComponent } from './pages/saved/saved.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stream/:id',
    component: SingleStreamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'saved',
    component: SavedComponent,
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
