import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter7HomeComponent } from './chapter7-home/chapter7-home.component';
const routes: Routes = [{ path: '', component: Chapter7HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter7RoutingModule {}
