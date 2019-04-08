import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClCurrentOffersComponent } from './cl-current-offers.component';

describe('ClCurrentOffersComponent', () => {
  let component: ClCurrentOffersComponent;
  let fixture: ComponentFixture<ClCurrentOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClCurrentOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClCurrentOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
