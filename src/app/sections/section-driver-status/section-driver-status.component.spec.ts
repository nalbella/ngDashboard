import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDriverStatusComponent } from './section-driver-status.component';

describe('SectionDriverStatusComponent', () => {
  let component: SectionDriverStatusComponent;
  let fixture: ComponentFixture<SectionDriverStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDriverStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDriverStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
