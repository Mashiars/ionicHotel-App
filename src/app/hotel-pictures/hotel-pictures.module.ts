import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPicturesPageRoutingModule } from './hotel-pictures-routing.module';

import { HotelPicturesPage } from './hotel-pictures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPicturesPageRoutingModule
  ],
  declarations: [HotelPicturesPage]
})
export class HotelPicturesPageModule {}
