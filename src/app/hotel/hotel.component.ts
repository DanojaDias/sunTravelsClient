import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel';
import {MainService} from '../main.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotel: Hotel[];


  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.mainService.getHotels()
      .subscribe(hotel => {this.hotel = hotel; });
  }


}
