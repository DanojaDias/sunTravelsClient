import { Component, OnInit } from '@angular/core';
import {RoomTypeDetails} from '../room-type-details';
import {RoomTypeDetailsService} from '../room-type-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roomTypeDetails: RoomTypeDetails[] = [];
  constructor(private roomTypeDetailsService: RoomTypeDetailsService) { }

  ngOnInit() {
    this.getRoomTypeDetails();
  }

  getRoomTypeDetails(): void {
    this.roomTypeDetailsService.getRoomTypeDetails()
      .subscribe(roomTypeDetails => this.roomTypeDetails = roomTypeDetails.slice(1, 5));
  }
}
