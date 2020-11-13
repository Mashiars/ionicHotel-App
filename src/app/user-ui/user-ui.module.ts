import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUiPageRoutingModule } from './user-ui-routing.module';

import { UserUiPage } from './user-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUiPageRoutingModule
  ],
  declarations: [UserUiPage]
})
export class UserUiPageModule {}
