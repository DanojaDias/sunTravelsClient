import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ContractComponent} from './contract/contract.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {HotelComponent} from './hotel/hotel.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'room-type-details', component: RoomTypeDetailsComponent },
  { path: 'contracts', component: ContractComponent },
  { path: 'add-contract', component: AddContactComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'add-hotel', component: AddHotelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
