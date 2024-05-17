import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';

import { Chapter9RoutingModule } from './chapter9-routing.module';
import { Chapter9HomeComponent } from './chapter9-home/chapter9-home.component';

@NgModule({
  declarations: [Chapter9HomeComponent],
  imports: [CommonModule, Chapter9RoutingModule, Observable, Subscriber],
})
export class Chapter9Module {}
