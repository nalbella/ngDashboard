import { Component, OnInit } from '@angular/core';
import { TripsDataService } from '../../services/trips-data.service';
import * as moment from 'moment';

// const SAMPLE_BARCHART_DATA: any[] = [
//   { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Trips'},
//   { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Trips'}
// ]

// const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _tripsDataService: TripsDataService) { }
  
  trips: any;
  tripLabels: string[];
  tripData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
    this._tripsDataService.getTrips(1, 100)
      .subscribe(res => {
        //console.log(res);
        //console.log(res['page']['data']);
        const localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map((x: any) => x[0]).reverse();
        this.barChartData = [{ 'data': localChartData.map((x: any) => x[1]), 'label': 'Price Amount'}];
      });
  }

  getChartData(res: Response) {
    this.trips = res['page']['data'];
    const data = this.trips.map((o: any)  => o.quotedPrice);
    const labels = this.trips.map((o: any) => moment(new Date(o.createdDate)).format('YY-MM-DD'));

    const formattedTrips = this.trips.reduce((r: any, e:any) => {
      r.push([moment(e.createdDate).format('YY-MM-DD'), e.quotedPrice]);
      return r;
    }, []);
    
    //console.log(formattedTrips);

    const p = [];

    const chartData = formattedTrips.reduce((r: any, e:any) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;


    //const labels = this.trips.map((o: any) => new Date(o.rta));
    //console.log(labels);
  }



}
