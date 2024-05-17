import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //module içi route
import { NotFoundComponent } from './not-found/not-found.component'; //module içi route

const routes: Routes = [
  //transform from eagerloading to lazy loading
  {
    path: 'chapter1',
    loadChildren: () =>
      import('./chapter1/chapter1.module').then((m) => m.Chapter1Module),
  },
  {
    path: 'chapter2',
    loadChildren: () =>
      import('./chapter2/chapter2.module').then((m) => m.Chapter2Module),
  },
  {
    path: 'chapter3',
    loadChildren: () =>
      import('./chapter3/chapter3.module').then((m) => m.Chapter3Module),
  },
  {
    path: 'chapter4',
    loadChildren: () =>
      import('./chapter4/chapter4.module').then((m) => m.Chapter4Module),
  },
  {
    path: 'chapter5',
    loadChildren: () =>
      import('./chapter5/chapter5.module').then((m) => m.Chapter5Module),
  },
  {
    path: 'chapter7',
    loadChildren: () =>
      import('./chapter7/chapter7.module').then((m) => m.Chapter7Module),
  },
  {
    path: 'chapter9',
    loadChildren: () =>
      import('./chapter9/chapter9.module').then((m) => m.Chapter9Module),
  },
  {
    path: 'photoapp',
    loadChildren: () =>
      import('./photoapp/photoapp.module').then((m) => m.PhotoappModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }, //hiç bir pathle eşleşmiyorsa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
