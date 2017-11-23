import {Hotel} from './hotel';


export class Contract {
  contractId: number;
  hotel: Hotel;
  markup: number;
  validFrom: Date;
  validTo: Date;
}
