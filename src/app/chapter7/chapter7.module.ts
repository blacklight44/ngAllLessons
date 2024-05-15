import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Chapter7RoutingModule } from './chapter7-routing.module';
import { Chapter7HomeComponent } from './chapter7-home/chapter7-home.component';
import { CardformComponent } from './cardform/cardform.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [Chapter7HomeComponent, CardformComponent, InputComponent],
  imports: [CommonModule, Chapter7RoutingModule, ReactiveFormsModule],
})
export class Chapter7Module {}
