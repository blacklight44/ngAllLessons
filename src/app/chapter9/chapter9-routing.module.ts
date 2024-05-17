import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter9HomeComponent } from './chapter9-home/chapter9-home.component';
const routes: Routes = [{ path: '', component: Chapter9HomeComponent }];
//const routes: Routes = [{ path: '', component: Chapter7HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter9RoutingModule {}

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class Chapter7RoutingModule {}
