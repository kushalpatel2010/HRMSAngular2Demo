import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

import { ENV } from './../core';
import { Leave } from './leave';

@Injectable()
export class LeaveService {
    constructor(
        private http: Http,
        private env: ENV
    ) { }

    private handleError(error: any) {
        // console.error('An error occurred', error);
        // return Promise.reject(error.message || error);
        return Observable.throw(error.message || error);
    }

    getLeaves(): Observable<Leave[]> {
        // return this.http.get(this.env.apiUrl + '/leaves')
        //     //.toPromise()
        //     //.then(response => response.json() as Leave[])
        //     .map(this.extractData)
        //     .catch(this.handleError);
        return this.http.get(this.env.apiUrl + 'leaves')
                    .map(response => response.json() as Leave[])
                    .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    getLeaveById(leaveId: number): Promise<Leave> {
        return this.http.get(this.env.apiUrl + 'leaves/' + leaveId)
            .toPromise()
            .then(response => response.json() as Leave)
            .catch(this.handleError);
    }
}