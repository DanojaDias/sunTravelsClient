import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})


export class HotelsComponent implements OnInit {
  hotels: Hotel[];
  selectedHotel: Hotel;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels()
      .subscribe(hotels => {this.hotels = hotels;});
  }

  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
  }

}
