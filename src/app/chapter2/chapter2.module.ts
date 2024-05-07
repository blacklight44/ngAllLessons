import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter2RoutingModule } from './chapter2-routing.module';
import { Chapter2HomeComponent } from './chapter2-home/chapter2-home.component';

@NgModule({
  declarations: [Chapter2HomeComponent],
  imports: [CommonModule, Chapter2RoutingModule],
  //exports: [Chapter2HomeComponent],
})
export class Chapter2Module {}
