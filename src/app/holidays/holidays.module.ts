import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ENV } from './../core';
import { HolidaysComponent } from './holidays.component';
import { HolidayService } from './holiday.service';
import { HolidaysRoutingModule } from './holidays-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HolidaysRoutingModule
  ],
  declarations: [HolidaysComponent],
  providers: [
        HolidayService,
        ENV
    ],
})
export class HolidaysModule { }
