import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevKeyboardComponent } from './dev-keyboard.component';

describe('DevKeyboardComponent', () => {
  let component: DevKeyboardComponent;
  let fixture: ComponentFixture<DevKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
