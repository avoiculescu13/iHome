import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS }
  from '@angular-material-components/color-picker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CarViewComponent } from './car-view/car-view.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicComponent } from './components/basic/basic.component';
import { TechnicalInspectionEditComponent } from './components/technical-inspection/technical-inspection-edit/technical-inspection-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { TechnicalInspectionAddDialogComponent } from './dialogs/technical-inspection-add-dialog/technical-inspection-add-dialog.component';
import { TechnicalInspectionListComponent } from './components/technical-inspection/technical-inspection-list/technical-inspection-list.component';
import { TechnicalRevisionAddDialogComponent } from './dialogs/technical-revision-add-dialog/technical-revision-add-dialog.component';
import { TechnicalRevisionEditComponent } from './components/technical-revision/technical-revision-edit/technical-revision-edit.component';
import { TechnicalRevisionListComponent } from './components/technical-revision/technical-revision-list/technical-revision-list.component';
import { CarEditResolver } from 'src/app/core/resolvers/car-resolver';


@NgModule({
  declarations: [
    CarListComponent,
    CarEditComponent,
    BasicComponent,
    TechnicalInspectionEditComponent,
    TechnicalInspectionListComponent,
    TechnicalRevisionListComponent,
    TechnicalRevisionEditComponent,
    TechnicalInspectionAddDialogComponent,
    TechnicalRevisionAddDialogComponent,
    CarViewComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarListComponent
        //data: { component: 'CarListComponent', detach:true, attachOnReturnFrom: 'UtilitiesListComponent' }
      },
      {
        path: ':id/edit',
        component: CarEditComponent,
        data: { component: 'CarEditComponent', detach: false, attachOnReturnFrom:'' },
        resolve: { resolveData: CarEditResolver },
        children: [
          { path: '', component: BasicComponent },
          { path: 'basic', component: BasicComponent },
          { path: 'technicalRevision', component: TechnicalRevisionListComponent },
          { path: 'technicalInspection', component: TechnicalInspectionListComponent },
        ]
      }
    ]),
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatColorPickerModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class CarModule { }
