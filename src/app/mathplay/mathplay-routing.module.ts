import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathplayhomeComponent } from './mathplayhome/mathplayhome.component';

const routes: Routes = [{ path: '', component: MathplayhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathplayRoutingModule {}
