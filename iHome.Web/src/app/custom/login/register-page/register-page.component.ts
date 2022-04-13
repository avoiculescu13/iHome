import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

import { User } from 'src/app/core/model/user';
import { BasicValidation } from 'src/app/core/model/validation-errors';
import { LoginService } from 'src/app/core/services/LoginService';

function emailConfirmationValidator(control: AbstractControl): { [key: string]: boolean } | null {

  var emailControl = control.get('emailAddress');
  var confirmEmailControl = control.get('confirmEmailAddress');

  if (emailControl.pristine || confirmEmailControl.pristine)
    return null;

  if (emailControl.value === confirmEmailControl.value)
    return null;

  return { 'match': true };
}

function emailValidator(pattern: string) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {

    if (!control.value)
      return null;

    if (control.value.match(pattern)) {
      return null;
    }

    return { 'emailFormat': true };
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  public user!: User;
  public pageTitle: string = 'Register';
  private sub!: Subscription;
  public errorMessage: string = '';

  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value = 10;
  public isLoading: boolean = false;
  registerFormGroup: FormGroup;
  public emailMessage: string;
  public basicValidation: BasicValidation = {
    required: 'Please enter your email address!',
    email: 'Please enter a valid email address!',
    emailFormat: 'Please enter a valid email address!'
  };

  constructor(private loginService: LoginService,
    private route: Router, private fb: FormBuilder) {
    this.user = {
      userName: '',
      emailAddress: '',
      isAdmin: false,
      isLocked: false,
      fullName: '',
      password: ''
    };
  }
  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      emailGroup: this.fb.group({
        emailAddress: ['', [Validators.required, emailValidator('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        confirmEmailAddress: ['', Validators.required],
      }, { validator: emailConfirmationValidator }),
      userName: ['', [Validators.required, Validators.min(5)]],
      password: ['', [Validators.required, Validators.min(5)]]
    });

    const emailControl = this.registerFormGroup.get('emailGroup.emailAddress');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => {
        this.setMessage(emailControl)
      }
    );
  }

  setMessage(control: AbstractControl): void {
    this.emailMessage = '';

    if ((control.touched || control.dirty) && control.errors) {
      this.emailMessage = Object.keys(control.errors).map(
        key => this.basicValidation[key as keyof typeof this.basicValidation]).join(' ');
    }
  }

  onRegister(): void {
    if (this.registerFormGroup.valid) {
      this.controlsToObjects();
      this.isLoading = true;
      this.sub = this.loginService.register(this.user)
        .subscribe(
          {
            next: loginContext => {
              if (loginContext.responseType.code === 1) {
                this.route.navigateByUrl('/welcome');
              } else {
                this.errorMessage = loginContext.responseType.message;
              }
              this.isLoading = false;
            },
            error: msg => {
              this.errorMessage = msg;
              this.isLoading = false;
            }
          }
        )

    } else {
      this.errorMessage = 'Error!';
    }
  }

  controlsToObjects(): void {
    this.errorMessage = '';
    this.user.emailAddress = this.registerFormGroup.get('emailAddress').value;
    this.user.userName = this.registerFormGroup.get('userName').value;
    this.user.fullName = this.registerFormGroup.get('fullName').value;
    this.user.password = this.registerFormGroup.get('password').value;
  }
}
