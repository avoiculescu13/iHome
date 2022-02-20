import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { NeedLoginGuard } from '../guards/route.guard';



@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cars', component: CarListComponent, canActivate: [NeedLoginGuard] }
    ])
  ]
})
export class CarModule { }
