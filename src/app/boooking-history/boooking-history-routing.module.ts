import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoookingHistoryPage } from './boooking-history.page';

const routes: Routes = [
  {
    path: '',
    component: BoookingHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoookingHistoryPageRoutingModule {}
