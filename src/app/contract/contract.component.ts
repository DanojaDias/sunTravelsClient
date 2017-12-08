import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';
import { MainService } from '../main.service';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contract: Contract[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.mainService.getContracts()
      .subscribe(contract => {this.contract = contract; });
  }
}
