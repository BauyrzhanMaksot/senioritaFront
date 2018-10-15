import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOfferComponent } from './driver-offer.component';

describe('DriverOfferComponent', () => {
  let component: DriverOfferComponent;
  let fixture: ComponentFixture<DriverOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
