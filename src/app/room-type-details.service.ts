import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {RoomTypeDetails} from './room-type-details';

@Injectable()
export class RoomTypeDetailsService {

  private getRoomTypeDetailsUrl = 'http://localhost:8090/room-type-details/';
  private postRoomTypeDetailUrl = 'http://localhost:8090/room-type-details/';

  constructor(private http: HttpClient) { }


  getRoomTypeDetails(): Observable<RoomTypeDetails[]> {
    return this.http.get<RoomTypeDetails[]>(this.getRoomTypeDetailsUrl);
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
