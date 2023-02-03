import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAboutComponent } from './dev-about.component';

describe('DevAboutComponent', () => {
  let component: DevAboutComponent;
  let fixture: ComponentFixture<DevAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
