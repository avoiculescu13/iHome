import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoginService } from 'src/app/core/services/LoginService';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public pageTitle: string = 'Reset Account Password';
  public alert: string = '';
  public message: string = '';
  public emailAddress: string = '';

  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value = 10;
  public isLoading: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.loginService.forgotPassword(this.emailAddress).subscribe({
      next: () => {
        this.message = "An email containing the password was sent to '" + this.emailAddress + "'. Please check you Inbox!";
        this.emailAddress = '';
        this.isLoading = false;
      },
      error: (err) => {
        this.alert = err;
        this.emailAddress = '';
        this.isLoading = false;
      }
    });
  }

}
