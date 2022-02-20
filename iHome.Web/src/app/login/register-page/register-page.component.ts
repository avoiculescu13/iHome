import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public user!: User;
  public pageTitle: string = 'Register Page';
  private sub!: Subscription;
  public errorMessage: string = '';

  constructor(private loginService: LoginService,
              private route: Router) {
    this.user = {
      userName: '',
      emailAddress: '',
      isAdmin: false,
      isLocked: false,
      name: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  onRegister(ngForm: NgForm): void {
    if (ngForm.valid) {

      this.sub = this.loginService.register(this.user)
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
    }
  }
}
