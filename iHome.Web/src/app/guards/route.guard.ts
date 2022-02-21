import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/LoginService";

@Injectable({
    providedIn: 'root'
})
export class NeedLoginGuard implements CanActivate {
    constructor(private loginService: LoginService,
        private route: Router) {

    }
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.loginService.getSnapshotCurrentUser() == null) {
            this.route.navigate(['/login']);
            return false;
        }
        return true;
    }
}