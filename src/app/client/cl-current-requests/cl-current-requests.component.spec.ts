import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClCurrentRequestsComponent } from './cl-current-requests.component';

describe('ClCurrentRequestsComponent', () => {
  let component: ClCurrentRequestsComponent;
  let fixture: ComponentFixture<ClCurrentRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClCurrentRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClCurrentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
