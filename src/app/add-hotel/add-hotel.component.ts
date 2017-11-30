import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../hotel';
import {HotelService} from '../hotel.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private hotelService: HotelService) { }

  @Input() hotel: Hotel;

  ngOnInit() {

  }

  addHotels(hotel: Hotel): void {
    console.log(hotel.hotelCity);
    this.hotelService.addHotel(hotel);
  }
}
