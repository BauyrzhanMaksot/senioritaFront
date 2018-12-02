import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrEditRegularOfferComponent } from './dr-edit-regular-offer.component';

describe('DrEditRegularOfferComponent', () => {
  let component: DrEditRegularOfferComponent;
  let fixture: ComponentFixture<DrEditRegularOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrEditRegularOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrEditRegularOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
