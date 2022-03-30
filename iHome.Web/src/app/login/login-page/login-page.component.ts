import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
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

  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value = 10;
  public isLoading: boolean = false;

  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
  }

  ngOnInit(): void {
  }

  onLogin(ngForm: NgForm): void {
    if (ngForm.valid) {
      this.errorMessage = '';
      this.isLoading = true;
      this.sub = this.loginService.login(this.userName, this.password)
        .subscribe(
          {
            next: loginContext => {
              if (loginContext.responseType.code === 1) {
                this.route.navigate(['/welcome']);
              } else {
                this.errorMessage = loginContext.responseType.message;
                this.isLoading = false;
              }
            },
            error: msg => {
              this.errorMessage = msg;
              this.isLoading = false;
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
