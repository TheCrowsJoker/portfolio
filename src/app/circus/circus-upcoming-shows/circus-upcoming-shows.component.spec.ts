import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircusUpcomingShowsComponent } from './circus-upcoming-shows.component';

describe('CircusUpcomingShowsComponent', () => {
  let component: CircusUpcomingShowsComponent;
  let fixture: ComponentFixture<CircusUpcomingShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircusUpcomingShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircusUpcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
