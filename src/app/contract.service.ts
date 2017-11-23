import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Contract} from './contract';

@Injectable()
export class ContractService {

  private contractsUrl = 'http://localhost:8090/contract/';

  constructor(private http: HttpClient) { }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractsUrl);
  }
}
