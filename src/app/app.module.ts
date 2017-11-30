import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule   } from '@angular/common/http';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { RoomTypeDetailsService } from './room-type-details.service';
import { ContractService } from './contract.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractComponent } from './contract/contract.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MaterializeModule } from 'angular2-materialize';
import { HotelComponent } from './hotel/hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import {HotelService} from './hotel.service';

// import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule, MaterializeModule
  ],


  declarations: [
    AppComponent,
    RoomTypeDetailsComponent,
    DashboardComponent,
    ContractComponent,
    AddContactComponent,
    HotelComponent,
    AddHotelComponent
  ],
  providers: [ RoomTypeDetailsService, ContractService, HotelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
