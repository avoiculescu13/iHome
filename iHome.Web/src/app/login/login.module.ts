import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NeedLoginGuard } from '../guards/route.guard';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path:'login', component: LoginPageComponent },
      { path:'register', component: RegisterPageComponent }
    ]),
    HttpClientModule
  ]
})
export class LoginModule { }
