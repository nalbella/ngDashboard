import { Component, OnInit } from '@angular/core';
import { TripsDataService } from 'src/app/services/trips-data.service';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
import * as moment from 'moment';

//const LINE_CHART_SAMPLE_DATA: any[] = [
//  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
//  { data: [12, 18, 26, 13, 28, 26], label: 'Image Recognition'},
//  { data: [52, 34, 49, 53, 68, 62], label: 'Forecasting'},
//
//];

//const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'];

@Component({
  selector: 'app-lie-chart',
  templateUrl: './lie-chart.component.html',
  styleUrls: ['./lie-chart.component.css']
})
export class LieChartComponent implements OnInit {

  constructor(private _tripsDataService: TripsDataService){}

  topAccounts: string[];
  allJobs: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  results: any;

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
    this._tripsDataService.getTrips(1,100).subscribe(res => {
      console.log('res', res);
      
      this.allJobs = res['page']['data'];
      
      //console.log('All Jobs', this.allJobs);

      this._tripsDataService.getTripsByAccount(3).subscribe(cus => {
        this.results = cus;
        const accounts: any = cus;

        console.log('accounts', this.results);

        this.topAccounts = accounts.map((x: any) => x['name']);

        console.log('top accounts', this.topAccounts);

        const allChartData = this.topAccounts.reduce((result, i) => {
          result.push(this.getChartData(this.allJobs, i));
          return result;
        }, []);

        console.log('allChartData', allChartData);

        let dates = allChartData.map((x: any) => x['data']).reduce((a, i) => {
          a.push(i.map((o: any) => new Date(o[0])));
          return a;
        }, []);

        dates = [].concat.apply([], dates);

        const r = this.getAccountJobsByDate(allChartData, dates)['data'];

        console.log('r:', r);

        this.lineChartLabels = r[0]['jobs'].map((o: any) => o['date']);

        this.lineChartData = [
          { 'data': r[0].jobs.map((x: any) => x.total), 'label': r[0]['account']},
          { 'data': r[1].jobs.map((x: any) => x.total), 'label': r[1]['account']},
          { 'data': r[2].jobs.map((x: any) => x.total), 'label': r[2]['account']}
        ]

      })


    })
  }
  
  getChartData(allJobs: any, name: string) {
      const accountJobs = allJobs.filter((o: any) => o.account.name === name);
      
      const formattedJobs = accountJobs.reduce((r, e) => {
        r.push([e.createdDate, e.quotedPrice]);
        return r;
      }, []);

      console.log('formattedJobs:', formattedJobs);

      const result = { account: name, data: formattedJobs };

      console.log('result', result);

      return result;
  }

  getAccountJobsByDate(jobs: any, dates: any) {
    // to each account -> for each data =>
    // { data: [{'account': 'XYZ', 'jobs': [{ 'date' : '17-11-25', total: 2421}, {}]}, {}, {}]}
    const accounts = this.topAccounts;
    const prettyDates = dates.map((x: any) => this.toFriendlyDate(x));
    const u = Array.from(new Set(prettyDates)).sort();
    console.log('prettyDates', u);

    //define our result object to return;
    const result = {};
    const dataSets = result['data'] = [];

    accounts.reduce((x, y, i) => {
      console.log('i', i);
      console.log('Reducing:', y, 'at index:', i);
      const accountJobs = [];
      dataSets[i] = {
        account: y, jobs:
        u.reduce((r, e, j) => {
          //console.log('Reducing:', e, 'at index:', j);
          const obj = {};
          obj['date'] = e;
          obj['total'] = this.getAccountDateTotal(e, y);  // sum total jobs for this account on this
          accountJobs.push(obj);
          console.log('Reducing:', e, 'at index:', j, 'accountJobs', accountJobs);
          return accountJobs;
        })
      }
      return x;
    }, []);
    
    return result;
  }

  toFriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getAccountDateTotal(date: any, account: string)
  {
    console.log('allJobs', this.allJobs);

    const r = this.allJobs.filter(o => o.account.name === account
      && this.toFriendlyDate(o.rta) === date);

    const result = r.reduce((a,b) => {
      return a + b.quotedPrice;
    }, 0);

    return result;
  }
}
