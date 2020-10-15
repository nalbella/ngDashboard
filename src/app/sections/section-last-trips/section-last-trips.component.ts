import { Component, OnInit } from '@angular/core';
import { Trip } from '../../shared/trip';

@Component({
  selector: 'app-section-last-trips',
  templateUrl: './section-last-trips.component.html',
  styleUrls: ['./section-last-trips.component.css']
})
export class SectionLastTripsComponent implements OnInit {

  constructor() { }

  trips: Trip[] = [
    {id: 1, account: 
      {id: 1, name: 'John Bercow', postCode: 'w12 8py', email: 'nalbella@gmail.com'}, 
      quote: 30, RTA: new Date(2020, 9, 1), creationDate: new Date(2020, 9, 1)},
    {id: 2, account: 
      {id: 1, name: 'John Bercow', postCode: 'w12 8py', email: 'nalbella@gmail.com'}, 
      quote: 30, RTA: new Date(2020, 9, 1), creationDate: new Date(2020, 9, 1)},
    {id: 3, account: 
      {id: 1, name: 'John Bercow', postCode: 'w12 8py', email: 'nalbella@gmail.com'}, 
      quote: 30, RTA: new Date(2020, 9, 1), creationDate: new Date(2020, 9, 1)},
    {id: 4, account: 
      {id: 1, name: 'John Bercow', postCode: 'w12 8py', email: 'nalbella@gmail.com'}, 
      quote: 30, RTA: new Date(2020, 9, 1), creationDate: new Date(2020, 9, 1)},
    {id: 5, account: 
      {id: 1, name: 'John Bercow', postCode: 'w12 8py', email: 'nalbella@gmail.com'}, 
      quote: 30, RTA: new Date(2020, 9, 1), creationDate: new Date(2020, 9, 1)},

  ];

  ngOnInit(): void {
  }

}
