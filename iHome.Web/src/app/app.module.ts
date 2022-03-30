import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { RoutingModule } from './routing/routing.module';
import { CarModule } from './car/car.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { UtilityModule } from './utility/utility.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserActivityModule } from './user-activity/user-activity.module';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PathNotFoundComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CarModule,
    UserActivityModule,
    LoginModule,
    UtilityModule,
    RoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
