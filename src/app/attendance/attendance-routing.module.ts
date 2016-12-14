import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
	{
		path: 'attendance',
		component: AttendanceComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class AttendanceRoutingModule { }
