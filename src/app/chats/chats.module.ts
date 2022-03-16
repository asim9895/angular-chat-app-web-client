import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats/chats.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ChatsComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ChatsModule {}
