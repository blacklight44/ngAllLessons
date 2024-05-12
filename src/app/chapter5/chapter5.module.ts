import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDirective } from './first.directive';

import { Chapter5RoutingModule } from './chapter5-routing.module';
import { Chapter5HomeComponent } from './chapter5-home/chapter5-home.component';

@NgModule({
  declarations: [Chapter5HomeComponent, FirstDirective],
  imports: [CommonModule, Chapter5RoutingModule],
  //exports: [Chapter5HomeComponent],
})
export class Chapter5Module {}
