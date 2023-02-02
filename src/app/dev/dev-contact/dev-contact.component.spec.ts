import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevContactComponent } from './dev-contact.component';

describe('DevContactComponent', () => {
  let component: DevContactComponent;
  let fixture: ComponentFixture<DevContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
