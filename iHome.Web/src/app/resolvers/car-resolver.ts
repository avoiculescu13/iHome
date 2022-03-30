import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { Car } from "../model/car";
import { CarService } from "../services/CarService";

@Injectable({
    providedIn: 'root'
})
export class CarEditResolver implements Resolve<any>{

    constructor(private carService: CarService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        var id = route.paramMap.get('id');

        return this.carService.getById(id).pipe(
            map(car => ({ car: car })),

            catchError(error => {
                const message = `Retrieval error: ${error}`;
                return of({ car: null, error: message });
            })
        )
    }
}