import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {Contract} from '../contract';
import {Hotel} from '../hotel';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  constructor(private mainService: MainService) { }
  hotel: Hotel[];
  contract: Contract;

  ngOnInit() {
    this.contract = new Contract();
    this.mainService.getHotels().subscribe(hotel => {this.hotel = hotel; });

  }

  addContracts(contract: Contract): void {
    this.mainService.addContract(contract);
  }

  dropDownSelect(element: Hotel): void {
    document.getElementById('hotel_name_dropdown').innerHTML = element.hotelName;
    this.contract.hotel = element;
    console.log(element);
  }

}
