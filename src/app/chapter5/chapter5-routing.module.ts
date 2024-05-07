import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter5HomeComponent } from './chapter5-home/chapter5-home.component'; //module içi route

const routes: Routes = [{ path: 'chapter5', component: Chapter5HomeComponent }]; //path belirleme

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter5RoutingModule {}
