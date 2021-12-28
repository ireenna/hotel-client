import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Booking, BookingCreate } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) { }

  get():Observable<Booking[]>{
    return this.http.get<Booking[]>('https://localhost:44352/api/Booking');
  }
  create(newproj: BookingCreate): Observable<Booking>{
    return this.http.post<Booking>('https://localhost:44352/api/Booking', newproj);
  }
  update(newproj: BookingCreate, id:number): Observable<Booking>{
    return this.http.put<Booking>('https://localhost:44352/api/Booking/'+id, newproj);
  }
  delete(id:number): Observable<any>{
    return this.http.delete('https://localhost:44352/api/Booking/'+id);
  }
}
