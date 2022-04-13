import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Car, PeriodicTechnicalRevision } from 'src/app/core/model/car';
import { FormModelStorageService } from 'src/app/core/services/FormModelStorage';
import { TechnicalRevisionAddDialogComponent } from '../../../dialogs/technical-revision-add-dialog/technical-revision-add-dialog.component';



@Component({
  selector: 'app-technical-revision-list',
  templateUrl: './technical-revision-list.component.html',
  styleUrls: ['./technical-revision-list.component.css']
})
export class TechnicalRevisionListComponent implements OnInit {

  public formGroup: FormGroup;
  displayedColumns: string[] = ['kilometers', 'notes', 'serviceGarage', 'price', 'date', 'button'];
  dataSource: MatTableDataSource<PeriodicTechnicalRevision>;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PeriodicTechnicalRevision>();
  }

  ngOnInit(): void {
    this.formGroup = FormModelStorageService.get('carFormGroup/revision').formObject as FormGroup;

    this.route.parent.data.subscribe(data => {
      this.dataSource.data = (data['resolveData'].car as Car).TechnicalRevision;
    });
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(TechnicalRevisionAddDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result && result != '') {
        var rev = new PeriodicTechnicalRevision();
        rev.Date = result.date;
        rev.Notes = result.notes;
        rev.Price = result.price;
        rev.ServiceGarage = result.garage;
        rev.Kilometers = result.kilometers;

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
