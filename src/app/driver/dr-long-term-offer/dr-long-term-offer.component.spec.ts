import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrLongTermOfferComponent } from './dr-long-term-offer.component';

describe('DrLongTermOfferComponent', () => {
  let component: DrLongTermOfferComponent;
  let fixture: ComponentFixture<DrLongTermOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrLongTermOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrLongTermOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
