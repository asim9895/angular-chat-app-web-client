import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
})
export class PeopleModule {}
