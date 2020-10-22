import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class TripsDataService {

    constructor(private _http: HttpClient) { }

    getTrips(pageIndex: number, pageSize: number) {
        return this._http.get('http://localhost:5000/api/trip/' + pageIndex + '/' + pageSize)
          .map((res: Response) => res.json());
    }
}