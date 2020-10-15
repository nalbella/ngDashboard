import { Component, OnInit } from '@angular/core';
import { Driver } from '../../shared/driver';

const SAMPLE_DRIVERS = [ 
  {id: 1, name: 'Pedro Jimenez', active: true },
  {id: 2, name: 'Pedro Ruiz', active: false },
  {id: 3, name: 'Antonio Gomez', active: true },
  {id: 4, name: 'Alberto Iglesias', active: true },
]

@Component({
  selector: 'app-section-driver-status',
  templateUrl: './section-driver-status.component.html',
  styleUrls: ['./section-driver-status.component.css']
})
export class SectionDriverStatusComponent implements OnInit {

  constructor() { }

  drivers: Driver[] = SAMPLE_DRIVERS;

  ngOnInit(): void {
  }

}
