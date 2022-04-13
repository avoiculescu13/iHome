import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    PathNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ConfirmDialogComponent,
    PathNotFoundComponent,
    WelcomeComponent
  ]
})
export class SharedModule { }
