import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';
import { ContractService } from '../contract.service';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contract: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getContracts()
      .subscribe(contract => {this.contract = contract; });
  }

}
