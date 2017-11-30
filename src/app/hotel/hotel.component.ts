import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotel: Hotel[];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels()
      .subscribe(hotel => {this.hotel = hotel; });
  }
}
