import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { IUserActionResolved, UserAction } from "../model/user";
import { UserActivityService } from "../services/UserActivityService";


@Injectable({
    providedIn: 'root'
})
export class UserActivityResolver implements Resolve<IUserActionResolved>{

    constructor(private userActivityService: UserActivityService) { }

    resolve(): Observable<IUserActionResolved> {
        return this.userActivityService.getForLoggedInUser().pipe(
            map(message => ({ userActions: message })),
            
            catchError(error => {
                const message = `Retrieval error: ${error}`;
                return of({ userActions: null, error: message });
            })
        )
    }
}