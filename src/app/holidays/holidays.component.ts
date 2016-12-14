import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Holiday } from './holiday';
import { HolidayService } from './holiday.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  holidays: Holiday[] = [];
  selectedYear: number = new Date().getFullYear();

  constructor(
    private router: Router,
    private holidayService: HolidayService
  ) { }

  ngOnInit(): void {
    this.getHolidays();
  }
  getHolidays(): void {
    this.holidayService.getHolidays(this.selectedYear.toString()).then(holidays => {
      this.holidays = holidays
    });
  }
  onYearChange(year: string): void {
    this.holidayService.getHolidays(year).then(holidays => {
      this.holidays = holidays
    });
  }

}
