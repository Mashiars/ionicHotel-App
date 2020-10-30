import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfullBookPage } from './successfull-book.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfullBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfullBookPageRoutingModule {}
