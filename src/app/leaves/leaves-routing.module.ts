import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core';
import { LeavesComponent } from './leaves.component';
import { LeaveEditComponent } from './edit/leave-edit.component';

const routes: Routes = [
	{
		path: 'leaves',
		component: LeavesComponent,
		canActivate: [AuthGuard]
	},
	{
        path: 'leaves/add',
        component: LeaveEditComponent
    },
    {
        path: 'leaves/edit/:id',
        component: LeaveEditComponent
    },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class LeavesRoutingModule { }
