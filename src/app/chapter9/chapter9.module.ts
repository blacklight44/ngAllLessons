import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Observable, Subscriber } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

import { Chapter9RoutingModule } from './chapter9-routing.module';
import { Chapter9HomeComponent } from './chapter9-home/chapter9-home.component';
// import { Compiler } from '@angular/compiler';
@NgModule({
  declarations: [Chapter9HomeComponent],
  imports: [CommonModule, Chapter9RoutingModule /*Observable, Subscriber*/],
})
export class Chapter9Module {}
