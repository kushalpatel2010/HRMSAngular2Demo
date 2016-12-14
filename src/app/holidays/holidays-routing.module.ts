import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core';
import { HolidaysComponent } from './holidays.component';

const routes: Routes = [
	{
		path: 'holidays',
		component: HolidaysComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class HolidaysRoutingModule { }
