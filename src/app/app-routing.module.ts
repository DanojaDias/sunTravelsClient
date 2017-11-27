import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'room-type-details', component: RoomTypeDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
