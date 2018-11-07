import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClTableListComponent } from './cl-table-list.component';

describe('ClTableListComponent', () => {
  let component: ClTableListComponent;
  let fixture: ComponentFixture<ClTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
