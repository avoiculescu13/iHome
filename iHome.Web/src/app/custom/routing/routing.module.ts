import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { WelcomeComponent } from 'src/app/shared/welcome/welcome.component';
import { NeedLoginGuard } from 'src/app/core/guards/route.guard';
import { PathNotFoundComponent } from 'src/app/shared/path-not-found/path-not-found.component';
import { LoadingStrategy } from 'src/app/core/lazy-loading/loading-strategy.service';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CoreModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, canActivate: [NeedLoginGuard] },
      {
        path: 'cars',
        canActivate: [NeedLoginGuard],
        data: { preload: true, component: 'CarListComponent', detach: true, attachOnReturnFrom: 'UtilitiesListComponent' },
        loadChildren: () =>
          import('../car/car.module').then(m => m.CarModule)
      },
      { path: '', component: WelcomeComponent, canActivate: [NeedLoginGuard] },
      { path: '**', component: PathNotFoundComponent, canActivate: [NeedLoginGuard] }
    ], { preloadingStrategy: LoadingStrategy })
  ]
})
export class RoutingModule { }
