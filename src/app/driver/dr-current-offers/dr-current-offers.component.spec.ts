import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrCurrentOffersComponent } from './dr-current-offers.component';

describe('DrCurrentOffersComponent', () => {
  let component: DrCurrentOffersComponent;
  let fixture: ComponentFixture<DrCurrentOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrCurrentOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrCurrentOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
