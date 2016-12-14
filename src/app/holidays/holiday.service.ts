import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ENV } from './../core/environment.config';
import { Holiday } from './holiday';

@Injectable()
export class HolidayService {
    constructor(
        private http: Http,
        private env: ENV
    ) { }

    // getHolidays(): Promise<Holiday[]> {
    //     return Promise.resolve(HOLIDAYS);
    // }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getHolidays(year: string): Promise<Holiday[]> {
        return this.http.get(this.env.apiUrl + 'holidays?year=' + year)
            .toPromise()
            .then(response => response.json() as Holiday[])
            .catch(this.handleError);
    }
    getNextHoliday(): Promise<Holiday> {
        return this.http.get(this.env.apiUrl + 'holidays/next')
            .toPromise()
            .then(response => response.json() as Holiday)
            .catch(this.handleError);
    }
}