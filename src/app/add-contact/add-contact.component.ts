import { Component, OnInit } from '@angular/core';
import {ContractService} from '../contract.service';
import {Contract} from '../contract';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  constructor(private contractService: ContractService) { }

  ngOnInit() {

  }

  addContracts(contract: Contract): void {
    this.contractService.addContract(contract);
  }


}
