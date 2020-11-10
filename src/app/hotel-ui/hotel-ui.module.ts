import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelUiPageRoutingModule } from './hotel-ui-routing.module';

import { HotelUiPage } from './hotel-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelUiPageRoutingModule
  ],
  declarations: [HotelUiPage]
})
export class HotelUiPageModule {}
