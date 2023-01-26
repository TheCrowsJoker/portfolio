import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusBannerComponent } from './circus-banner.component';

describe('CircusBannerComponent', () => {
  let component: CircusBannerComponent;
  let fixture: ComponentFixture<CircusBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
