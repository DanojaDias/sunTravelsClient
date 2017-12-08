import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule   } from '@angular/common/http';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContractComponent } from './contract/contract.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MaterializeModule } from 'angular2-materialize';
import { HotelComponent } from './hotel/hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import {MainService} from './main.service';
import { AddRoomTypeDetailsComponent } from './add-room-type-details/add-room-type-details.component';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule,
    PrettyJsonModule
  ],


  declarations: [
    AppComponent,
    RoomTypeDetailsComponent,
    ContractComponent,
    AddContactComponent,
    HotelComponent,
    AddHotelComponent,
    AddRoomTypeDetailsComponent
  ],
  providers: [ MainService, { provide: JsonPipe, useClass: SafeJsonPipe } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
