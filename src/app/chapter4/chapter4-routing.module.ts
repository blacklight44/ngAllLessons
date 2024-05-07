import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter4HomeComponent } from './chapter4-home/chapter4-home.component'; //module içi route

const routes: Routes = [{ path: '', component: Chapter4HomeComponent }]; //path belirleme

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter4RoutingModule {}
