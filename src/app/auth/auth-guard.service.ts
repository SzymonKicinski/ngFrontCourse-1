import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase';


@Injectable()
// export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
        // private route: Route
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.authService.isAuthenticated();
    // }

    // canLoad(route: Route) {
    //     console.log('Dupa');
    //     const isAuthenticated = this.authService.isAuthenticated();

    //     if (isAuthenticated) {
    //         return true;
    //     } else {
    //         this.router.navigate(['./signin']);
    //         return false;
    //     }
    // }

}

@Injectable()
export class CanLoadAuthGuard implements CanLoad {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canLoad(route: Route) {
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        console.log('Dupa');
        const isAuthenticated = this.authService.isAuthenticated();

        if (isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['./signin']);
            return false;
        }
    }
}
