import { Component, OnInit } from '@angular/core';
import { TripsDataService } from '../../services/trips-data.service';

@Component({
  selector: 'app-section-trips-volume',
  templateUrl: './section-trips-volume.component.html',
  styleUrls: ['./section-trips-volume.component.css']
})
export class SectionTripsVolumeComponent implements OnInit {

  tripsDataByAccount: any;
  tripsDataByState: any;

  constructor(private _tripsData: TripsDataService) { }

  ngOnInit(): void {
    this._tripsData.getTripsByState().subscribe(res => {
      this.tripsDataByState = res;
    })

    this._tripsData.getTripsByAccount(5).subscribe(res => {
      this.tripsDataByAccount = res;
    })
  }

}
