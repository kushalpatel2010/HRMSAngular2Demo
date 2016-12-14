import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ENV } from './../core/environment.config';
import { Attendance } from './attendance';

@Injectable()
export class AttendanceService {
    constructor(
        private http: Http,
        private env: ENV
    ) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getAttendance(year: string, month: string): Promise<Attendance[]> {
        return this.http.get(this.env.apiUrl + 'attendances?year=' + year + '&month=' + month)
            .toPromise()
            .then(response => response.json() as Attendance[])
            .catch(this.handleError);
    }
}