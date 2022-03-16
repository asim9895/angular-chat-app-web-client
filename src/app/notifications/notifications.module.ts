import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [CommonModule, ComponentsModule],
})
export class NotificationsModule {}
