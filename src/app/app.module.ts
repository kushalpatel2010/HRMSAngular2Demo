import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard, AuthService } from './core';
import { HolidaysModule } from './holidays';
import { AccountModule } from './account';
import { AttendanceModule } from './attendance';
import { DashboardModule } from './dashboard';
import { LeavesModule } from './leaves';

import { AppComponent } from './app.component';
import { HrmsAppRoutingModule } from './app-routing.module'
import { PageNotFoundComponent } from './shared';

@NgModule({
	declarations: [
		AppComponent, PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,		
		HolidaysModule,
		AccountModule,
		AttendanceModule,
		DashboardModule,
		LeavesModule,
		HrmsAppRoutingModule,
	],
	providers: [
		AuthService,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
