import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginContext } from 'src/app/model/loginContext';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public userName: string = '';
  public password: string = '';
  public pageTitle: string = 'Login Page';
  public errorMessage: string = '';
  private sub!: Subscription;

  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
  }

  onLogin(ngForm: NgForm): void {
    if (ngForm.valid) {

      this.sub = this.loginService.login(this.userName, this.password)
        .subscribe(
          {
            next: loginContext => {
              if (loginContext.loginResponseType.code === 1) {
                this.route.navigateByUrl('/welcome');
              } else {
                this.errorMessage = loginContext.loginResponseType.message;
              }
            },
            error: msg => {
              this.errorMessage = msg;
            }
          }
        )

    } else {
      this.errorMessage = 'Error!!!';
      this.userName = '';
      this.password = '';
    }
  }
}
