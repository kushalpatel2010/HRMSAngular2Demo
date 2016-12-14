import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Attendance } from './attendance';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendance: Attendance[] = [];
  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth();

  constructor(
    private router: Router,
    private attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
    this.getAttendance(this.selectedYear.toString(), this.selectedMonth.toString());
  }
  getAttendance(year: string, month: string): void {
    this.attendanceService.getAttendance(year, month).then(attendance => {
      this.attendance = attendance
    });
  }
  onYearChange(year: string): void {
    this.getAttendance(year.toString(), this.selectedMonth.toString());
  }
  onMonthChange(month: string): void {
    this.getAttendance(this.selectedYear.toString(), month.toString());
  }
  setClasses(att) {
    let classes = {
      weekend: att.status == "WO",
      leave: att.status == "L",
      holiday: att.status == "H"
    };
    return classes;
  }

}
