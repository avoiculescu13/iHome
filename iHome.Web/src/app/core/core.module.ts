import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoPipe } from './pipes/boolean-pipe';


@NgModule({
  declarations: [
    YesNoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    YesNoPipe
  ]
})
export class CoreModule { }
