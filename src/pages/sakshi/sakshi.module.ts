import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SakshiPage } from './sakshi';

@NgModule({
  declarations: [
    SakshiPage,
  ],
  imports: [
    IonicPageModule.forChild(SakshiPage),
  ],
})
export class SakshiPageModule {}
