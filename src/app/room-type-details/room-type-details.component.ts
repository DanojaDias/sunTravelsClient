import { Component, OnInit } from '@angular/core';
import { RoomTypeDetails } from '../room-type-details';
import { RoomTypeDetailsService } from '../room-type-details.service';

@Component({
  selector: 'app-room-type-details',
  templateUrl: './room-type-details.component.html',
  styleUrls: ['./room-type-details.component.css']
})

export class RoomTypeDetailsComponent implements OnInit {
  displayedColumns = ['position', 'name'];
  roomTypeDetails: RoomTypeDetails[];

  constructor(private roomTypeDetailsService: RoomTypeDetailsService) { }

  ngOnInit() {
    this.getRoomTypeDetails();
  }

  getRoomTypeDetails(): void {
    this.roomTypeDetailsService.getRoomTypeDetails()
      .subscribe(roomTypeDetails => {this.roomTypeDetails = roomTypeDetails; });
  }
}
