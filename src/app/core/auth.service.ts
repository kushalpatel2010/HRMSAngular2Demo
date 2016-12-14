import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ENV } from './../core/environment.config';

@Injectable()
export class AuthService implements CanActivate {
    token: string;
    userId: number;
    isAuthenticated: boolean = false;

    constructor(
        private router: Router,
        private http: Http,
        private env: ENV
    ) {
        var currentUser = JSON.parse(localStorage.getItem('pb_hrms_current_user'));
        this.token = currentUser && currentUser.token;
        this.userId = currentUser && currentUser.userId;
        this.isAuthenticated = currentUser ? true : false;
    }

    //alias method
    login(username: string, password: string) {
        return this.authenticate(username, password);
    }
    authenticate(username: string, password: string): Promise<boolean> {
        let body = JSON.stringify({ username: username, password: password });
        //let body = "{ username: 'username', password: 'password' }";
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.env.apiUrl + 'authenticate', body, options)
            .toPromise()
            .then(response => {
                if (response.json().token) {
                    localStorage.setItem('pb_hrms_current_user', JSON.stringify({
                        username: username,
                        userId: response.json().userId,
                        token: response.json().token
                    }));
                    this.token = response.json().token;
                    this.userId = response.json().userId;
                    this.isAuthenticated = true;
                    return true;
                }
                else {
                    return false;
                }
            })
            .catch(this.handleError);
    }

    logout(): void {
        this.token = null;
        this.isAuthenticated = false;
        localStorage.removeItem('pb_hrms_current_user');
    }

    getAuthHeaders(): RequestOptions {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    canActivate() {
        if (this.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}