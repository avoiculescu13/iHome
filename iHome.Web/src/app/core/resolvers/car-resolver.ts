import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { Car } from "../model/car";
import { CarService } from "../services/CarService";
import { LoginService } from "../services/LoginService";

@Injectable({
    providedIn: 'root'
})
export class CarEditResolver implements Resolve<any>{

    constructor(private carService: CarService, private loginService: LoginService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        var id = route.paramMap.get('id');
        return this.carService.getById(id).pipe(
            map(car => {
                let record: Car = new Car(this.loginService);
                record.Brand = car.Brand;
                record.ColorHex = car.ColorHex ? '#' + car.ColorHex : null;
                record.CylinderCapacity = car.CylinderCapacity;
                record.Id = car.Id;
                record.HasImage = car.HasImage;
                record.ManufactureDate = car.ManufactureDate;
                record.Price = car.Price;
                record.TechnicalInspection = car.TechnicalInspection;
                record.TechnicalRevision = car.TechnicalRevision;
                record.TypeName = car.TypeName;
                record.UserName = car.UserName;
                return { car: record };
            }),

            catchError(error => {
                const message = `Retrieval error: ${error}`;
                return of({ car: null, error: message });
            })
        )
    }
}