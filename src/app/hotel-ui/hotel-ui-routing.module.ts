import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelUiPage } from './hotel-ui.page';

const routes: Routes = [
  {
    path: '',
    component: HotelUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelUiPageRoutingModule {}
