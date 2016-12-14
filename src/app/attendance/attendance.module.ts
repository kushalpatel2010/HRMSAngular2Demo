import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ENV } from './../core';
import { AttendanceComponent } from './attendance.component';
import { AttendanceService } from './attendance.service';
import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceComponent],
  providers: [
    AttendanceService,
    ENV
  ]
})
export class AttendanceModule { }
