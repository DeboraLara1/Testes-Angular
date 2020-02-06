import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDefaultComponent } from './ng-switch-default.component';

describe('NgSwitchDefaultComponent', () => {
  let component: NgSwitchDefaultComponent;
  let fixture: ComponentFixture<NgSwitchDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
