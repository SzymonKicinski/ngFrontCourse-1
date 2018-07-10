import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }

}
