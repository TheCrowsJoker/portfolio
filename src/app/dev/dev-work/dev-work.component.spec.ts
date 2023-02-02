import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWorkComponent } from './dev-work.component';

describe('DevWorkComponent', () => {
  let component: DevWorkComponent;
  let fixture: ComponentFixture<DevWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
