import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { BasicComponent } from './car-edit/basic/basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS }
  from '@angular-material-components/color-picker';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CarEditResolver } from '../resolvers/car-resolver';
import { TechnicalInspectionEditComponent } from './car-edit/technical-inspection/technical-inspection-edit/technical-inspection-edit.component';
import { TechnicalInspectionListComponent } from './car-edit/technical-inspection/technical-inspection-list/technical-inspection-list.component';
import { TechnicalRevisionListComponent } from './car-edit/technical-revision/technical-revision-list/technical-revision-list.component';
import { TechnicalRevisionEditComponent } from './car-edit/technical-revision/technical-revision-edit/technical-revision-edit.component';
import { NeedLoginGuard } from '../guards/route.guard';
import { TechnicalInspectionAddDialogComponent } from '../dialogs/technical-inspection-add-dialog/technical-inspection-add-dialog.component';
import { TechnicalRevisionAddDialogComponent } from '../dialogs/technical-revision-add-dialog/technical-revision-add-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';


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
    TechnicalRevisionAddDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: 'cars',
        children: [
          { path: '', component: CarListComponent, canActivate: [NeedLoginGuard] },
          {
            path: ':id/edit',
            component: CarEditComponent,
            canActivate: [NeedLoginGuard],
            resolve: { resolveData: CarEditResolver },
            children: [
              { path: '', component: BasicComponent },
              { path: 'basic', component: BasicComponent },
              { path: 'technicalRevision', component: TechnicalRevisionListComponent },
              { path: 'technicalInspection', component: TechnicalInspectionListComponent },
            ]
          }
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
