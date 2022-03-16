import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CookieModule } from 'ngx-cookie';
import { StreamsModule } from './streams/streams.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/users.reducer';
import { environment } from 'src/environments/environment.prod';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreModule } from './explore/explore.module';
import { PeopleModule } from './people/people.module';
import { FollowersModule } from './followers/followers.module';
import { FollowingModule } from './following/following.module';
import { ChatsModule } from './chats/chats.module';
import { PhotosModule } from './photos/photos.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StreamsModule,
    ExploreModule,
    PeopleModule,
    FollowersModule,
    FollowingModule,
    ChatsModule,
    PhotosModule,
    NotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    }),
    CookieModule.forRoot(),
    StoreModule.forRoot({
      users: userReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
