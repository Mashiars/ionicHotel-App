import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListPage } from './hotel-list.page';

const routes: Routes = [
  {
    path: '',
    component: HotelListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelListPageRoutingModule {}
