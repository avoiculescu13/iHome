import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { Car, PeriodicTechnicalInspection } from 'src/app/core/model/car';
import { FormModelStorageService } from 'src/app/core/services/FormModelStorage';
import { TechnicalInspectionAddDialogComponent } from '../../../dialogs/technical-inspection-add-dialog/technical-inspection-add-dialog.component';



@Component({
  selector: 'app-technical-inspection-list',
  templateUrl: './technical-inspection-list.component.html',
  styleUrls: ['./technical-inspection-list.component.css']
})
export class TechnicalInspectionListComponent implements OnInit {

  public formGroup: FormGroup;
  displayedColumns: string[] = ['kilometers', 'notes', 'serviceGarage', 'price', 'date', 'passed', 'button'];
  dataSource: MatTableDataSource<PeriodicTechnicalInspection>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PeriodicTechnicalInspection>();
   }

  ngOnInit(): void {
    this.formGroup = FormModelStorageService.get('carFormGroup/inspection').formObject as FormGroup;

    this.route.parent.data.subscribe(data => {
      this.dataSource.data = (data['resolveData'].car as Car).TechnicalInspection;
    });
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(TechnicalInspectionAddDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result && result != '') {
        var rev = new PeriodicTechnicalInspection();
        rev.Date = result.date;
        rev.Notes = result.notes;
        rev.Price = result.price;
        rev.ServiceGarage = result.garage;
        rev.Kilometers = result.kilometers;
        rev.Passed = result.passed;

        this.dataSource.data.push(rev);
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  removeItem(id: string): void {
    this.dataSource.data.splice(this.dataSource.data.findIndex(r => r.Id === id), 1);
    this.dataSource.data = this.dataSource.data;
  }

}
