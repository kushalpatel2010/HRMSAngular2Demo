import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Holiday, HolidayService } from './../holidays';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nextHoliday: Holiday;

  constructor(
    private router: Router,
    private holidayService: HolidayService
  ) { }

  ngOnInit(): void {
    this.getNextHoliday();
  }
  getNextHoliday(): void {
    this.holidayService.getNextHoliday().then(holiday => this.nextHoliday = holiday);
  }
}
