import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClDashboardComponent } from './cl-dashboard.component';

describe('ClDashboardComponent', () => {
  let component: ClDashboardComponent;
  let fixture: ComponentFixture<ClDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
