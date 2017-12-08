import { Component, OnInit } from '@angular/core';
import { RoomTypeDetails } from '../room-type-details';
import { MainService } from '../main.service';

@Component({
  selector: 'app-room-type-details',
  templateUrl: './room-type-details.component.html',
  styleUrls: ['./room-type-details.component.css']
})

export class RoomTypeDetailsComponent implements OnInit {
  roomTypeDetails: RoomTypeDetails[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getRoomTypeDetails();
  }

  getRoomTypeDetails(): void {
    this.mainService.getRoomTypeDetails()
      .subscribe(roomTypeDetails => {this.roomTypeDetails = roomTypeDetails; });
  }
}
