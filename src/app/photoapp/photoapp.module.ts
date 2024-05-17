import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoappRoutingModule } from './photoapp-routing.module';
import { PhotoappHomeComponent } from './photoapp-home/photoapp-home.component';
import { DisplayphotoComponent } from './displayphoto/displayphoto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PhotoappHomeComponent, DisplayphotoComponent],
  imports: [CommonModule, PhotoappRoutingModule, HttpClientModule],
})
export class PhotoappModule {}
