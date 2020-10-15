import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLastOffersComponent } from './section-last-offers.component';

describe('SectionLastOffersComponent', () => {
  let component: SectionLastOffersComponent;
  let fixture: ComponentFixture<SectionLastOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionLastOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLastOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
