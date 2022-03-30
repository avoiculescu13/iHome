import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/LoginService";

@Injectable({
    providedIn: 'root'
})
export class NeedLoginGuard implements CanActivate {
    constructor(private loginService: LoginService,
        private route: Router) {
    }
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (this.loginService.getSnapshotCurrentUser() == null && (state.url !== '/login' && state.url !== '/register')) {
            this.route.navigate(['/login']);
            return false;
        }

        if (this.loginService.getSnapshotCurrentUser() !== null && (state.url == '/login' || state.url == '/register')) {
            this.route.navigate(['/welcome']);
            return false;
        }
        return true;
    }
}


@Injectable({
    providedIn: 'root'
})
export class NavigateToCarRecord implements CanActivate {
    constructor(private route: ActivatedRoute) {
    }
    canActivate(_route: ActivatedRouteSnapshot): boolean {
        var id = this.route.snapshot.paramMap.get('id');
        if (!id) {
            return false;
        }
        return true;
    }
}