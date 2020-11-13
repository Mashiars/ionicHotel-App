import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUiPage } from './user-ui.page';

const routes: Routes = [
  {
    path: '',
    component: UserUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUiPageRoutingModule {}
