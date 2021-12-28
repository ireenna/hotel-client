import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor() { }

  @Input('users') userList!: Booking[];
  @Output() itemSelected =  new EventEmitter<number>();
  @Output() itemSelectedToDelete =  new EventEmitter<number>();

  ngOnInit(): void {
  }

  userSelected(index: number){
    this.itemSelected.emit(index);
  }
  userSelectedToDelete(index: number){
    this.itemSelectedToDelete.emit(index);
  }

}
