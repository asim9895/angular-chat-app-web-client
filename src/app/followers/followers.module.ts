import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowersComponent } from './followers/followers.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [FollowersComponent],
  imports: [CommonModule, ComponentsModule],
})
export class FollowersModule {}
