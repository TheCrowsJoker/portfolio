import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusGalleryComponent } from './circus-gallery.component';

describe('CircusGalleryComponent', () => {
  let component: CircusGalleryComponent;
  let fixture: ComponentFixture<CircusGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
