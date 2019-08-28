import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CropsListComponent } from './components/crops-list/crops-list.component';
import { FilterSeasonPipe } from './pipes/filter-season.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { WeekDayPipe } from './pipes/week-day.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DatePickerComponent,
        CropsListComponent,
        FilterSeasonPipe,
        FormatDatePipe,
        WeekDayPipe,
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
