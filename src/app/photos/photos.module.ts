import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PhotosModule {}
