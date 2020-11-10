import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPicturesPage } from './hotel-pictures.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPicturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPicturesPageRoutingModule {}
