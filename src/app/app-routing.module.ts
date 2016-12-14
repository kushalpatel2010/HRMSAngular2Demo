import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account';
import { AuthGuard } from './core';
import { PageNotFoundComponent } from './shared';

const adminRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  }
];

const routes: Routes = [
	...adminRoutes,
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
	{
		path: '**',
		component: PageNotFoundComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class HrmsAppRoutingModule { }
