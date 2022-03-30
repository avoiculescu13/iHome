import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { RouterModule } from '@angular/router';
import { UserActivityResolver } from '../resolvers/userActivity-resolver';



@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'notifications',
        component: NotificationListComponent, resolve: { resolveData: UserActivityResolver },
        outlet: 'notifications'
      }
    ])
  ]
})
export class UserActivityModule { }
