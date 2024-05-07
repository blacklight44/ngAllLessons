import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter1HomeComponent } from './chapter1-home/chapter1-home.component'; //module içi route

const routes: Routes = [{ path: '', component: Chapter1HomeComponent }]; //path belirleme

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter1RoutingModule {}
