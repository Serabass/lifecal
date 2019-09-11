import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaySelectorComponent } from './birthday-selector.component';

describe('BirthdaySelectorComponent', () => {
  let component: BirthdaySelectorComponent;
  let fixture: ComponentFixture<BirthdaySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
