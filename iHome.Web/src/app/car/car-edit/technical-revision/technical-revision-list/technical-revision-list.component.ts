import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TechnicalRevisionAddDialogComponent } from 'src/app/dialogs/technical-revision-add-dialog/technical-revision-add-dialog.component';
import { Car, PeriodicTechnicalRevision } from 'src/app/model/car';
import { FormModelStorageService } from 'src/app/services/FormModelStorage';

@Component({
  selector: 'app-technical-revision-list',
  templateUrl: './technical-revision-list.component.html',
  styleUrls: ['./technical-revision-list.component.css']
})
export class TechnicalRevisionListComponent implements OnInit {

  public formGroup: FormGroup;
  displayedColumns: string[] = ['kilometers', 'notes', 'serviceGarage', 'price', 'date'];
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

      var rev = new PeriodicTechnicalRevision();
      rev.Date = result.date;
      rev.Notes = result.notes;
      rev.Price = result.price;
      rev.ServiceGarage = result.garage;
      rev.Kilometers = result.kilometers;

      this.dataSource.data.push(rev);
      this.dataSource.data = this.dataSource.data;

      this.objectToControls();
    });
  }

  objectToControls(): void{
    // debugger;
    // this.formGroup.patchValue({
    //   list: this.dataSource.data
    // });
  }
}
