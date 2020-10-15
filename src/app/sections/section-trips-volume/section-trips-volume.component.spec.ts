import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTripsVolumeComponent } from './section-trips-volume.component';

describe('SectionTripsVolumeComponent', () => {
  let component: SectionTripsVolumeComponent;
  let fixture: ComponentFixture<SectionTripsVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTripsVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTripsVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
