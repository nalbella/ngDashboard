import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieChartComponent } from './lie-chart.component';

describe('LieChartComponent', () => {
  let component: LieChartComponent;
  let fixture: ComponentFixture<LieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
