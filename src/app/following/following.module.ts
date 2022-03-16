import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowingComponent } from './following/following.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [FollowingComponent],
  imports: [CommonModule, ComponentsModule],
})
export class FollowingModule {}
