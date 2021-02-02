import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable()
export class TripsDataService {

    constructor(private _http: HttpClient) { }

    getTrips(pageIndex: number, pageSize: number) {
        return this._http.get<Response>('http://localhost:5000/api/trip/' + pageIndex + '/' + pageSize)
        //.pipe(map(res => res.results || []));
        //.subscribe(response => console.log(response));
        .pipe(map(res => res));
    }
}