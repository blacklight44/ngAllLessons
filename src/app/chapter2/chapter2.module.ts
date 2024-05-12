import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter2RoutingModule } from './chapter2-routing.module';
import { Chapter2HomeComponent } from './chapter2-home/chapter2-home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [Chapter2HomeComponent, CardComponent],
  imports: [CommonModule, Chapter2RoutingModule],
  //exports: [Chapter2HomeComponent],
})
export class Chapter2Module {}
