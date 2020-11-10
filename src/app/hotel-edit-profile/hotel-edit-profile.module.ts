import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelEditProfilePageRoutingModule } from './hotel-edit-profile-routing.module';

import { HotelEditProfilePage } from './hotel-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelEditProfilePageRoutingModule
  ],
  declarations: [HotelEditProfilePage]
})
export class HotelEditProfilePageModule {}
