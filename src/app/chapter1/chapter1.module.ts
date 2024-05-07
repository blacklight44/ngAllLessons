import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chapter1RoutingModule } from './chapter1-routing.module';
import { Chapter1HomeComponent } from './chapter1-home/chapter1-home.component';

@NgModule({
  declarations: [Chapter1HomeComponent],
  imports: [CommonModule, Chapter1RoutingModule],
  //kendi içinden routing yapacağımızdan exportu iptal ediyoruz
  //exports: [Chapter1HomeComponent], //component export
})
export class Chapter1Module {}
