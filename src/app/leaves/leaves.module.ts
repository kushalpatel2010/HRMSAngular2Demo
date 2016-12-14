import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeavesComponent } from './leaves.component';
import { LeaveEditComponent } from './edit/leave-edit.component';
import { LeaveService } from './leave.service';
import { LeavesRoutingModule } from './leaves-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    LeavesRoutingModule
  ],
  declarations: [
    LeavesComponent,
    LeaveEditComponent
  ],
  providers: [
    LeaveService
  ]
})
export class LeavesModule { }
