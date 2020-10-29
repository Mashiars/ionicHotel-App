import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHotelPage } from './main-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: MainHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHotelPageRoutingModule {}
