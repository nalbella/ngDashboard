import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLastTripsComponent } from './section-last-trips.component';

describe('SectionLastTripsComponent', () => {
  let component: SectionLastTripsComponent;
  let fixture: ComponentFixture<SectionLastTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionLastTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLastTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
