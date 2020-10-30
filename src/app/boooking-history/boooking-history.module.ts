import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoookingHistoryPageRoutingModule } from './boooking-history-routing.module';

import { BoookingHistoryPage } from './boooking-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoookingHistoryPageRoutingModule
  ],
  declarations: [BoookingHistoryPage]
})
export class BoookingHistoryPageModule {}
