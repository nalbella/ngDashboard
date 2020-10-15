import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../shared/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() driverInput: Driver;

  ngOnInit() {
    this.setDriverStatus(this.driverInput.active);
  }

  setDriverStatus(isOnLine: boolean) {
    if (isOnLine) {
      this.driverInput.active = true;
      this.color = '#66BB6A',
      this.buttonText = 'Sign Off';
    } else {
      this.driverInput.active = false;
      this.color = '#FF6B6B',
      this.buttonText = 'Sign On';
    }
  }

  toggleStatus(onLineStatus: boolean) {
    console.log(this.driverInput.name, ': ', onLineStatus);
    this.setDriverStatus(!onLineStatus);
  }

}
