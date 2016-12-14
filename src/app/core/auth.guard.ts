import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate() {
        if (this.authService.isAuthenticated){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}