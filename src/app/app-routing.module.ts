import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractComponent} from './contract/contract.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {HotelComponent} from './hotel/hotel.component';
import {AddRoomTypeDetailsComponent} from './add-room-type-details/add-room-type-details.component';

const routes: Routes = [
  { path: 'add-room-type-details/:hotelId', component: AddRoomTypeDetailsComponent },
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
