import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './custom/login/login.module';
import { RoutingModule } from './custom/routing/routing.module';
import { UserActivityModule } from './custom/user-activity/user-activity.module';
import { UtilityModule } from './custom/utility/utility.module';
import { CacheRouteReuseStrategy } from './core/caching/route/cache-route-reuse.strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    RouterModule,
    UserActivityModule,
    LoginModule,
    UtilityModule,
    RoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
