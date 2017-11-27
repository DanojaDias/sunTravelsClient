import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule   } from '@angular/common/http';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { RoomTypeDetailsService } from './room-type-details.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,    FormsModule, AppRoutingModule
  ],

  declarations: [
    AppComponent,
    RoomTypeDetailsComponent,
    DashboardComponent,
  ],
  providers: [ RoomTypeDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
