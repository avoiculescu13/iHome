import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/core/model/car';
import { CarType } from 'src/app/core/model/enums';
import { CarService } from 'src/app/core/services/CarService';
import { FormModelStorageService } from 'src/app/core/services/FormModelStorage';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carId: string;
  public carRecord!: Car;
  sub!: Subscription;
  carTypes: string[] = CarType.CarTypeValues;
  public color: ThemePalette = 'primary';

  carFormGroup!: FormGroup;

  colorCtr: AbstractControl = new FormControl(null);

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.carRecord = data['resolveData'].car;
      this.createFormModels();
    });

    // this.route.paramMap.subscribe(p =>    //that's when id changes. Ex: Next,Previous buttons
    //   this.carId = p.get("id") || '');
  }

  createFormModels() {
    
    this.carFormGroup = this.fb.group({
      basic: this.fb.group({
        model: [this.carRecord.Brand, [Validators.required]],
        type: [this.carRecord.TypeName, [Validators.required]],
        color: [this.carRecord.Color, [Validators.required]],
        manufactureDate: [this.carRecord.ManufactureDate, [Validators.required]],
        price: [this.carRecord.Price, [Validators.required]],
        capacity: [this.carRecord.CylinderCapacity, [Validators.required]],
        picture: ''
      }),
      revision: this.fb.group({
        list: this.carRecord.TechnicalRevision
      }),
      inspection: this.fb.group({
        list: this.carRecord.TechnicalInspection
      })
    })

    FormModelStorageService.register('carFormGroup', this.carFormGroup);
  }

  save(): void {
    this.controlsToObject();

    var baseForm = this.carFormGroup.get('basic') as FormGroup;

    this.carService.save(this.carRecord).subscribe({
      next: car => {
        if (baseForm.get('picture').value) {
          this.carService.linkImage(baseForm.get('picture').value, car.Id).subscribe({
            next: rec => {
              this.router.navigate(['/cars']);
            }
          })
        }
        else {
          this.router.navigate(['/cars']);
        }
      }
    });

  }

  controlsToObject() {
    
    var baseForm = this.carFormGroup.get('basic') as FormGroup;
    this.carRecord.Brand = baseForm.get('model').value;
    this.carRecord.TypeName = baseForm.get('type').value;
    this.carRecord.Color = baseForm.get('color').value;
    this.carRecord.CylinderCapacity = baseForm.get('capacity').value;
    this.carRecord.ManufactureDate = baseForm.get('manufactureDate').value;
    this.carRecord.Price = baseForm.get('price').value;
  }
}
