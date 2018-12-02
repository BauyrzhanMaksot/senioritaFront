import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrEditLongOfferComponent } from './dr-edit-long-offer.component';

describe('DrEditLongOfferComponent', () => {
  let component: DrEditLongOfferComponent;
  let fixture: ComponentFixture<DrEditLongOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrEditLongOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrEditLongOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
