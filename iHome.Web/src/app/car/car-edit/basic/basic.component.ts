import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car, PeriodicTechnicalRevision } from 'src/app/model/car';
import { CarType } from 'src/app/model/enums';
import { FormModelStorageService } from 'src/app/services/FormModelStorage';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild(NgForm, { static: false }) productForm: NgForm;

  carId: string;
  public carRecord!: Car;
  sub!: Subscription;
  carTypes: string[] = CarType.CarTypeValues;
  public color: ThemePalette = 'primary';
  public formGroup: FormGroup;

  colorCtr: AbstractControl = new FormControl(null);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.formGroup = FormModelStorageService.get('carFormGroup/basic').formObject as FormGroup;

    this.route.parent.data.subscribe(data => {
      this.carRecord = data['resolveData'].car;
      if (this.productForm) {
        this.productForm.reset();
      }
    });

    this.objectToControls();
  }

  objectToControls(): void{
    // this.formGroup.patchValue({
    //   model: this.carRecord.Brand,
    //   type: this.carRecord.TypeName,
    //   color: this.carRecord.Color
    // });
  }

}
