import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter3RoutingModule } from './chapter3-routing.module';
import { Chapter3HomeComponent } from './chapter3-home/chapter3-home.component';

@NgModule({
  declarations: [Chapter3HomeComponent],
  imports: [CommonModule, Chapter3RoutingModule],
  // exports: [Chapter3HomeComponent],
})
export class Chapter3Module {}
