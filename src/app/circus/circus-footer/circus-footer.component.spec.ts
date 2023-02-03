import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusFooterComponent } from './circus-footer.component';

describe('CircusFooterComponent', () => {
  let component: CircusFooterComponent;
  let fixture: ComponentFixture<CircusFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
