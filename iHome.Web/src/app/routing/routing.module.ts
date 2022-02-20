import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';
import { NeedLoginGuard } from '../guards/route.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, canActivate: [NeedLoginGuard] },
      { path: '', component: WelcomeComponent, canActivate: [NeedLoginGuard] },
      { path: '**', component: PathNotFoundComponent, canActivate: [NeedLoginGuard] }
    ])
  ]
})
export class RoutingModule { }
