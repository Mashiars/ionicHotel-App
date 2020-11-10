import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelEditProfilePage } from './hotel-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: HotelEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelEditProfilePageRoutingModule {}
