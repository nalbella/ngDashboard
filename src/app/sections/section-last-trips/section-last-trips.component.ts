import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/trip';
import { TripsDataService } from '../../services/trips-data.service';

@Component({
  selector: 'app-section-last-trips',
  templateUrl: './section-last-trips.component.html',
  styleUrls: ['./section-last-trips.component.css']
})
export class SectionLastTripsComponent implements OnInit {

  constructor(private _tripsData: TripsDataService) { }

  trips: Trip[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this._tripsData.getTrips(this.page, this.limit)
      .subscribe(res => {
        // console.log('Result from GetTrips: ', res);
        this.trips = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      })
  }

  goToPrevious(): void {
    this.page--;
    this.getTrips();
  }

  goToNext(): void {
    this.page++;
    this.getTrips();
  }
  
  goToPage(n: number): void {
    this.page = n;
    this.getTrips();
  }
}
