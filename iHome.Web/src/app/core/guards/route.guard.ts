import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterState, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { LoginService } from "../services/LoginService";

@Injectable({
    providedIn: 'root'
})
export class NeedLoginGuard implements CanActivate, CanLoad {
    constructor(private loginService: LoginService,
        private route: Router) {
    }
    canLoad(route: Route, segments: UrlSegment[]): boolean {
        
        if (this.loginService.getSnapshotCurrentUser() !== null) {
            return true;
        }
        this.route.navigate(['/login']);
        return false;
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