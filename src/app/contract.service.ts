import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Contract} from './contract';


// const contract = {
//   hotel:
//   {
//     hotelId: '1',
//     hotelName: 'sefsf',
//     hotelTp: 'sdfsf',
//     hotelCity: 'sdfsdf',
//     hotelState: 'dsfsdf',
//     hotelZip: 'hello',
//     hotelStreet: 'sdfsfs'
//   },
//   markup: '123',
//   validFrom: '2015-07-05T22:16:18Z',
//   validTo: '2017-07-05T22:16:18Z'
// };



@Injectable()
export class ContractService {

  private contractsUrl = 'http://localhost:8090/contract/';
  private addContractsUrl =  'http://localhost:8090/contract/add-contract';

  constructor(private http: HttpClient) { }



  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractsUrl);
  }

  addContract (contract: Contract):  Observable<Contract> {
    return this.http.post<Contract>(this.addContractsUrl, contract).pipe();
  }



  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
