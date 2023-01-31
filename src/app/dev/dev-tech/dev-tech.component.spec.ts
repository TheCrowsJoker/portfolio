import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTechComponent } from './dev-tech.component';

describe('DevTechComponent', () => {
  let component: DevTechComponent;
  let fixture: ComponentFixture<DevTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
