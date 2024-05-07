import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2HomeComponent } from './chapter2-home/chapter2-home.component'; //module içi route

const routes: Routes = [{ path: '', component: Chapter2HomeComponent }]; //path belirleme

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter2RoutingModule {}
