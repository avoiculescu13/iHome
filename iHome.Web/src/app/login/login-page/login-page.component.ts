import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public userName: string = '';
  public password: string = '';
  public pageTitle: string = 'Login';
  public errorMessage: string = '';
  private sub!: Subscription;

  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  onLogin(ngForm: NgForm): void {
    if (ngForm.valid) {

      this.sub = this.loginService.login(this.userName, this.password)
        .subscribe(
          {
            next: loginContext => {
              if (loginContext.responseType.code === 1) {
                this.route.navigate(['/welcome']);
              } else {
                this.errorMessage = loginContext.responseType.message;
              }
            },
            error: msg => {
              this.errorMessage = msg;
            }
          }
        )

    } else {
      this.errorMessage = 'Error!';
      this.userName = '';
      this.password = '';
    }
  }
}
