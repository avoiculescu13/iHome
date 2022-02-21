import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public pageTitle: string = 'Reset Account Password';
  public message: string = '';
  public emailAddress: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{

  }

}
