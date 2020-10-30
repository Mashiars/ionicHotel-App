import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfullBookPageRoutingModule } from './successfull-book-routing.module';

import { SuccessfullBookPage } from './successfull-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfullBookPageRoutingModule
  ],
  declarations: [SuccessfullBookPage]
})
export class SuccessfullBookPageModule {}
