import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClLongTermRequestComponent } from './cl-long-term-request.component';

describe('ClLongTermRequestComponent', () => {
  let component: ClLongTermRequestComponent;
  let fixture: ComponentFixture<ClLongTermRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClLongTermRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClLongTermRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
