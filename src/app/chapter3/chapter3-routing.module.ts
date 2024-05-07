import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter3HomeComponent } from './chapter3-home/chapter3-home.component'; //module içi route

const routes: Routes = [{ path: '', component: Chapter3HomeComponent }]; //path belirleme

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter3RoutingModule {}
