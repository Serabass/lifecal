import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Years2Component } from './years2.component';

describe('Years2Component', () => {
  let component: Years2Component;
  let fixture: ComponentFixture<Years2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Years2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Years2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
