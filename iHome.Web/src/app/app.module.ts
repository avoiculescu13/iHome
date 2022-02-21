import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { RoutingModule } from './routing/routing.module';
import { CarModule } from './car/car.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { NewCompComponent } from './new-comp/new-comp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PathNotFoundComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CarModule,
    LoginModule,
    RoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
