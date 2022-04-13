import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NeedLoginGuard } from 'src/app/core/guards/route.guard';
import { UtilitiesListComponent } from './utilities-list/utilities-list.component';


@NgModule({
  declarations: [
    UtilitiesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'utilities',
        component: UtilitiesListComponent,
        canActivate: [NeedLoginGuard],
        data: { component: 'UtilitiesListComponent', detach: false, attachOnReturnFrom: '' },
      }
    ])
  ]
})
export class UtilityModule { }
