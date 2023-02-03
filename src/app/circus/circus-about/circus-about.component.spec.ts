import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusAboutComponent } from './circus-about.component';

describe('CircusAboutComponent', () => {
  let component: CircusAboutComponent;
  let fixture: ComponentFixture<CircusAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
