import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from './hotel.service';
import { HttpClientModule   } from '@angular/common/http';
import { ContractComponent } from './contract/contract.component';
import {ContractService} from './contract.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,    FormsModule
  ],

  declarations: [
    AppComponent,
    HotelsComponent,
    ContractComponent,
  ],
  providers: [ HotelService, ContractService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
