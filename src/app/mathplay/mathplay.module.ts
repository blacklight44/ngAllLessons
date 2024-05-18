import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MathplayRoutingModule } from './mathplay-routing.module';
import { EqualityComponent } from './equality/equality.component';
import { MathplayhomeComponent } from './mathplayhome/mathplayhome.component';

@NgModule({
  declarations: [EqualityComponent, MathplayhomeComponent],
  imports: [CommonModule, MathplayRoutingModule, ReactiveFormsModule],
})
export class MathplayModule {}
