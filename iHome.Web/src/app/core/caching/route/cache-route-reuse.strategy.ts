import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CacheRouteReuseStrategy implements RouteReuseStrategy {

    storedRouteHandles = new Map<string, DetachedRouteHandle>();
    allowRetriveCache: any = {
    };

    shouldDetach(route: ActivatedRouteSnapshot): boolean {

        // if (route.data && route.data['detach'])
        //     return true;

        //console.log('shouldDetach');

        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        debugger;
        //console.log('store');
        //this.storedRouteHandles.set(route.data['component'], handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        
        //console.log('shouldAttach');
        // if (route.data && this.allowRetriveCache[route.data['component']]) {
        //     debugger;
        //     return this.storedRouteHandles.has(route.data['component']);
        // }

        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        debugger;
        //console.log('retrieve');
        //return this.storedRouteHandles.get(route.data['component']) as DetachedRouteHandle;
        return null;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {

        //console.log('shouldReuseRoute');
        // if (future.data && curr.data) {
        //     var futureComponentName = future.data['component'];
        //     var currComponentName = curr.data['component'];

        //     if (futureComponentName && currComponentName && future.data['attachOnReturnFrom'] === currComponentName) {
        //         this.allowRetriveCache[futureComponentName] = true;
        //     }
        // }

        return future.routeConfig === curr.routeConfig;
    }
}