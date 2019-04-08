import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClUserProfileViewComponent } from './cl-user-profile-view.component';

describe('ClUserProfileViewComponent', () => {
  let component: ClUserProfileViewComponent;
  let fixture: ComponentFixture<ClUserProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClUserProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClUserProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
