import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

// BEFORE ANGULAR 6 FOR GUARD THE ROUTE
// ----------------------------------
// @Injectable({
//     providedIn:"root"
// })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private authService:AuthService,
//         private router:Router,
//     ){}

//     canActivate(
//         route: ActivatedRouteSnapshot, 
//         state: RouterStateSnapshot
//     ): boolean | Observable<boolean> | Promise<boolean> {
        
//         return this.authService.isAuthenticated()
//             .then((authenticated:boolean) => {
//                 if(authenticated) {
//                     return true;
//                 } else {
//                     this.router.navigate(['/']);
//                 }
//             })
//     }
// }

// AFTER ANGULAR 6 FOR GUARD THE ROUTE
// ----------------------------------

@Injectable({
    providedIn:'root'
})
export class AuthGuard {
    constructor(
        private authService:AuthService,
        private router:Router,
    ){}

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :boolean | Observable<boolean> | Promise<boolean> {

        return this.authService.isAuthenticated()
            .then((authenticated:boolean) => {
                if(authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            })
    }
}

export const MyAuth:CanActivateChildFn = (
    next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :boolean | Observable<boolean> | Promise<boolean> => {
    return inject(AuthGuard).canActivate(next, state);
}