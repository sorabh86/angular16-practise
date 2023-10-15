import { Observable } from "rxjs";
import {ActivatedRouteSnapshot, CanActivateChildFn, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router'
import { inject } from "@angular/core";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

// before anguar 6
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot)
    :boolean | Observable<boolean> | Promise<boolean> {
        return component.canDeactivate();
    }
}

