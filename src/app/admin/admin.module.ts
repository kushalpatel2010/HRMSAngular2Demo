import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AdminRoutingModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    HolidaysComponent
  ],
  providers: [
    
  ]
})
export class AdminModule { }
