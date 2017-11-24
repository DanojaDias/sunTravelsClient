import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule   } from '@angular/common/http';
import { RoomTypeDetailsComponent } from './room-type-details/room-type-details.component';
import { RoomTypeDetailsService } from './room-type-details.service';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,    FormsModule
  ],

  declarations: [
    AppComponent,
    RoomTypeDetailsComponent,
  ],
  providers: [ RoomTypeDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
