import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesListComponent } from './utilities-list/utilities-list.component';
import { RouterModule } from '@angular/router';
import { NeedLoginGuard } from '../guards/route.guard';



@NgModule({
  declarations: [
    UtilitiesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'utilities', component: UtilitiesListComponent, canActivate: [NeedLoginGuard] }
    ])
  ]
})
export class UtilityModule { }
