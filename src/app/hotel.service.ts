import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from './hotel';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {

  private hotelsUrl = 'http://localhost:8090/hotel/';
  private addHotelsUrl =  'http://localhost:8090/hotel/add-hotel';
  constructor(private http: HttpClient) { }


  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  addHotel (hotel: Hotel) {
    return this.http.post<Hotel>(this.addHotelsUrl, hotel).subscribe();
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
