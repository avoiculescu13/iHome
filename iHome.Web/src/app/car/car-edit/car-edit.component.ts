import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarType } from 'src/app/model/enums';
import { CarService } from 'src/app/services/CarService';
import { FormModelStorageService } from 'src/app/services/FormModelStorage';

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

    this.carFormGroup = this.fb.group({
      basic: this.fb.group({
        model: ['', [Validators.required]],
        type: '',
        color: ['', [Validators.required]]
      }),
      revision: this.fb.group({
        list:''
      }),
      inspection: this.fb.group({
        list:''
      })
    })

    FormModelStorageService.register('carFormGroup', this.carFormGroup);

    // this.route.paramMap.subscribe(p =>    //that's when id changes. Ex: Next,Previous buttons
    //   this.carId = p.get("id") || '');

      this.route.data.subscribe(data => {
        this.carRecord = data['resolveData'].car;
      });
  
  }

  save(): void {
    var rootFormGroup = FormModelStorageService.get('carFormGroup').formObject as FormGroup;

    debugger;


    // var revisionFrom = rootFormGroup.get('revision') as FormGroup;
    // this.carRecord.TechnicalRevision.push(revisionFrom.get('list').value);


    if (true) {
      this.carService.save(this.carRecord).subscribe({
        next: prod => {
          this.router.navigate(['/cars']);
        }
      });
    }
  }
}
