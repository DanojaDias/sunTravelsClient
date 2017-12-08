import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from './hotel';
import 'rxjs/add/operator/map';
import {Contract} from './contract';
import {RoomTypeDetails} from './room-type-details';
import {RoomType} from './room-type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {

  private hotelsUrl = 'http://localhost:8090/hotel/';
  private addHotelsUrl =  'http://localhost:8090/hotel/add-hotel/';
  private contractsUrl = 'http://localhost:8090/contract/';
  private addContractsUrl =  'http://localhost:8090/contract/add-contract';
  private roomTypeDetailsUrl = 'http://localhost:8090/room-type-details/';
  private addRoomTypeDetailsUrl = 'http://localhost:8090/room-type-details/add-room-type-details';
  private addRoomTypeUrl = 'http://localhost:8090/room-type/add-room-type/';
  private roomTypeUrl = 'http://localhost:8090/room-type/';
  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  getHotelById(id: Number ): Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsUrl + id);
  }

  getContractByHotelId(id: Number ): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractsUrl + id);
  }

  addHotel (hotel: Hotel) {
    return this.http.post<Hotel>(this.addHotelsUrl, hotel, httpOptions).subscribe();
  }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractsUrl);
  }

  addContract (contract: Contract) {
    return this.http.post<Contract>(this.addContractsUrl, contract, httpOptions).subscribe();
  }

  addRoomType (roomType: RoomType): any {
    return this.http.post<RoomType>(this.addRoomTypeUrl, roomType, httpOptions).subscribe();
  }

  getRoomType (id: number): Observable<RoomType> {console.log(id);
    return this.http.get<RoomType>(this.roomTypeUrl + id  );
  }

  getRoomTypeDetails(): Observable<RoomTypeDetails[]> {
    return this.http.get<RoomTypeDetails[]>(this.roomTypeDetailsUrl);
  }

  addRoomTypeDetails (roomTypeDetails: RoomTypeDetails) {
   // console.log(JSON.parse(JSON.stringify( RoomTypeDetails )));
    return this.http.post<RoomTypeDetails>(this.addRoomTypeDetailsUrl, roomTypeDetails, httpOptions).subscribe();
  }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
