import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { Car } from "../model/car";
import { LoginService } from "./LoginService";

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private httpClient: HttpClient, private loginService: LoginService) {
    }

    getById(id: string): Observable<Car>{
        if(id === '0'){
            return of(this.newEmptyCar());
        }

        return this.httpClient.get<Car>("https://localhost:44321/Car/getById/" + id).pipe(
            catchError(this.errorHandler)
        );
    }

    getAll(): Observable<Car[]> {
        return this.httpClient.get<Car[]>("https://localhost:44321/Car/getAll").pipe(
            catchError(this.errorHandler)
        );
    }

    remove(carId: string): Observable<Car[]> {
        return this.httpClient.delete<Car[]>("https://localhost:44321/Car/delete?id=" + carId).pipe(
            catchError(this.errorHandler)
        );
    }

    save(carRecord: Car): Observable<Car> {
        debugger;
        return this.httpClient.post<Car>("https://localhost:44321/Car/add", carRecord).pipe(
            catchError(this.errorHandler)
        );
    }

    newEmptyCar(): Car{
        var car = new Car(this.loginService);
        car.UserName = this.loginService.getSnapshotCurrentUser().userName
        return car;
    }

    private errorHandler(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}