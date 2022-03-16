import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ExploreModule {}
