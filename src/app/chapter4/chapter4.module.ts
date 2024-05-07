import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter4RoutingModule } from './chapter4-routing.module';
import { Chapter4HomeComponent } from './chapter4-home/chapter4-home.component';

@NgModule({
  declarations: [Chapter4HomeComponent],
  imports: [CommonModule, Chapter4RoutingModule],
  //exports: [Chapter4HomeComponent],
})
export class Chapter4Module {}
