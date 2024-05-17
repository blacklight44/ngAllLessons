import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoappHomeComponent } from './photoapp-home/photoapp-home.component';

const routes: Routes = [{ path: '', component: PhotoappHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoappRoutingModule {}
