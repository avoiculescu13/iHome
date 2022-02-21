import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { User } from "../model/user";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { UseContext } from "../model/loginContext";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private user: User;

    private get currentUser(): User {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    private set currentUser(value: User) {
        localStorage.setItem('currentUser', JSON.stringify(value));
    }

    constructor(private httpClient: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public getObservableCurrentUser(): Observable<User> {
        return of(this.currentUser);
    }

    public getSnapshotCurrentUser(): User {
        return this.currentUser;
    }

    login(userName: string, password: string): Observable<UseContext> {
        this.user = {
            emailAddress: '',
            isAdmin: false,
            isLocked: false,
            name: '',
            password: password,
            userName: userName
        };
        
        return this.httpClient.post<UseContext>("https://localhost:44321/User/authenticate", this.user).pipe(
            catchError(this.errorHandler),
            tap(x => 
                {
                    if(x.responseType.code === 1)
                        this.currentUser = x.user
                })
        );
    }

    register(user: User): Observable<UseContext> {
        this.user = user;
        return this.httpClient.post<UseContext>("https://localhost:44321/User/register", this.user).pipe(
            catchError(this.errorHandler),
            tap(x => this.currentUser = x.user)
        );
    }

    logout(): Observable<boolean> {
        this.currentUser = null;
        return of(true);
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