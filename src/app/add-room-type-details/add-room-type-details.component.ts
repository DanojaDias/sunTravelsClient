import { Component, OnInit, Input } from '@angular/core';
import {RoomTypeDetails} from '../room-type-details';
import {MainService} from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { Location  } from '@angular/common';
import {Hotel} from '../hotel';
import {RoomType} from '../room-type';
import {Contract} from '../contract';

@Component({
  selector: 'app-add-room-type-details',
  templateUrl: './add-room-type-details.component.html',
  styleUrls: ['./add-room-type-details.component.css']
})
export class AddRoomTypeDetailsComponent implements OnInit {

  roomTypeDetails: RoomTypeDetails;
  roomType: RoomType;
  hotel: Hotel;
  contracts: Contract[];
  selectedContract: Contract;
  i: number ;
  constructor(private mainService: MainService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getContractByHotelId();
    this.roomTypeDetails = new RoomTypeDetails();
    this.roomType = new RoomType();
    this.hotel = new Hotel();
    this.selectedContract = new Contract();
    this.roomTypeDetails.roomType = this.roomType;
    this.roomTypeDetails.roomType.hotel = this.hotel;
    this.roomTypeDetails.contract = this.selectedContract;
    this.getHotel();

  }

  addRoomType(): void {
    this.i = this.mainService.addRoomType(this.roomType);
    console.log('hello' + this.i);
    // this.roomTypeDetails.contract = this.selectedContract;
    // this.roomType.roomTypeId = this.i;
    // this.roomTypeDetails.roomType = this.roomType;
    //
    // this.mainService.addRoomTypeDetails(this.roomTypeDetails);
  }

  addRoomTypeDetails(): void {
    this.roomTypeDetails.contract = this.selectedContract;
    this.mainService.getRoomType(this.i)
      .subscribe(roomType => {this.roomType = roomType; });
    this.roomTypeDetails.roomType = this.roomType;
    this.mainService.addRoomTypeDetails(this.roomTypeDetails);
  }

  getHotel(): void {
    this.mainService.getHotelById(this.getHotelId())
      .subscribe(hotel => {this.hotel = hotel; this.roomType.hotel = this.hotel; this.roomTypeDetails.roomType = this.roomType; });

  }

  getContractByHotelId(): void {
    this.mainService.getContractByHotelId(this.getHotelId())
      .subscribe(contracts => {this.contracts = contracts; });
  }

  getHotelId(): Number {
    return +this.route.snapshot.paramMap.get('hotelId');
  }

  dropDownSelect(element: Contract): void {
    document.getElementById('contract_dropdown').innerHTML = element.contractId + ' ' + element.hotel.hotelName;
    this.selectedContract = element;
    // console.log(element);
  }
}
