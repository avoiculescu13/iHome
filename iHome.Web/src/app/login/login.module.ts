import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NeedLoginGuard } from '../guards/route.guard';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent, canActivate: [NeedLoginGuard] },
      { path: 'register', component: RegisterPageComponent, canActivate: [NeedLoginGuard] },
      { path: 'forgotPassword', component: ForgotPasswordComponent }
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatNativeDateModule
  ]
})
export class LoginModule { }
