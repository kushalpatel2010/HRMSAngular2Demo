import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HolidaysComponent } from './holidays/holidays.component';

const adminRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [                    
                    { path: 'users', component: UsersComponent },
                    { path: 'holidays', component: HolidaysComponent },
                    { path: '', component: DashboardComponent }
                ]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
