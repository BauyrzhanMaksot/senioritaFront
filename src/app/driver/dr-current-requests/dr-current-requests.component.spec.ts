import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrCurrentRequestsComponent } from './dr-current-requests.component';

describe('DrCurrentRequestsComponent', () => {
  let component: DrCurrentRequestsComponent;
  let fixture: ComponentFixture<DrCurrentRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrCurrentRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrCurrentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
