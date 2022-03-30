import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/CarService';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  public carList: Car[];
  private sub!: Subscription;
  displayedColumns: string[] = ['brand', 'carTypeName', 'color', 'cylinderCapacity', 'price', 'button'];

  constructor(private carService: CarService, private router: Router, public dialog: MatDialog) { }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.sub = this.carService.getAll().subscribe({
      next: list => {
        this.carList = list as Car[];
      }
    });
  }

  delete(carId: string): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { header: 'Delete car...', message: 'Are you sure you want to delete the record?', noText: 'Cancel', yesText: 'Yes' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.sub = this.carService.remove(carId).subscribe({
          next: () => {
            this.readAll();
          }
        });
      }
    });
  }

  newCarRecord(): void {
    this.router.navigate(['/cars', 0, 'edit'])
  }
}
