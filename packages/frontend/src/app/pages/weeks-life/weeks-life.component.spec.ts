import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksLifeComponent } from './weeks-life.component';

describe('WeeksLifeComponent', () => {
  let component: WeeksLifeComponent;
  let fixture: ComponentFixture<WeeksLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
