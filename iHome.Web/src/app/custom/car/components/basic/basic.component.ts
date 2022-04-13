import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Car } from 'src/app/core/model/car';
import { CarType } from 'src/app/core/model/enums';
import { CarService } from 'src/app/core/services/CarService';
import { FormModelStorageService } from 'src/app/core/services/FormModelStorage';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild(NgForm, { static: false }) productForm: NgForm;

  reader: FileReader;
  carId: string;
  public carRecord!: Car;
  sub!: Subscription;
  carTypes: string[] = CarType.CarTypeValues;
  public color: ThemePalette = 'primary';
  public formGroup: FormGroup;
  fileToUpload: File | null = null;
  fileName: string = 'No file chosen';

  colorCtr: AbstractControl = new FormControl(null);

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit(): void {

    this.formGroup = FormModelStorageService.get('carFormGroup/basic').formObject as FormGroup;

    this.route.parent.data.subscribe(data => {
      this.carRecord = data['resolveData'].car;
      if (this.productForm) {
        this.productForm.reset();
      }
    });
  }

  handleFileInput(target: any) {

    const file = target.files[0];

    this.formGroup.patchValue({
      picture: target.files[0]
    });

    // this.carRecord.Image = file;
    this.fileName = file.name;
  }
}
