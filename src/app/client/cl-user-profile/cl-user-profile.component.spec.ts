import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClUserProfileComponent } from './cl-user-profile.component';

describe('ClUserProfileComponent', () => {
  let component: ClUserProfileComponent;
  let fixture: ComponentFixture<ClUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
