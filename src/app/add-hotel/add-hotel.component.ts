import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../hotel';
import {MainService} from '../main.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private mainService: MainService) { }

  hotel: Hotel;



   ngOnInit() {
    this.hotel = new Hotel();
  }

  addHotels(hotel: Hotel): void {
    this.mainService.addHotel(hotel);
  }
}
