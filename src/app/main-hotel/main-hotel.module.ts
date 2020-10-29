import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainHotelPageRoutingModule } from './main-hotel-routing.module';

import { MainHotelPage } from './main-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainHotelPageRoutingModule
  ],
  declarations: [MainHotelPage]
})
export class MainHotelPageModule {}
