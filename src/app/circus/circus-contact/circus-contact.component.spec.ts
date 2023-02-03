import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusContactComponent } from './circus-contact.component';

describe('CircusContactComponent', () => {
  let component: CircusContactComponent;
  let fixture: ComponentFixture<CircusContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
