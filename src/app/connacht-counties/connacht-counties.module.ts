import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnachtCountiesPageRoutingModule } from './connacht-counties-routing.module';

import { ConnachtCountiesPage } from './connacht-counties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnachtCountiesPageRoutingModule
  ],
  declarations: [ConnachtCountiesPage]
})
export class ConnachtCountiesPageModule {}
