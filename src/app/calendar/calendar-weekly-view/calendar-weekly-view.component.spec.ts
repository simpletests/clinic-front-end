import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeeklyViewComponent } from './calendar-weekly-view.component';

describe('CalendarWeeklyViewComponent', () => {
  let component: CalendarWeeklyViewComponent;
  let fixture: ComponentFixture<CalendarWeeklyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWeeklyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeeklyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
