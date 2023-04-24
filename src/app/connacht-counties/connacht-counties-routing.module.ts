import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnachtCountiesPage } from './connacht-counties.page';

const routes: Routes = [
  {
    path: '',
    component: ConnachtCountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnachtCountiesPageRoutingModule {}
