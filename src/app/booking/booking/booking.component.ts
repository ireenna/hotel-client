import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() item!: Booking;
  @Input('index') itemIndex!: number;
  @Output() itemSelected =  new EventEmitter<number>();
  @Output() itemSelectedToDelete =  new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  userSelected(){
    this.itemSelected.emit(this.itemIndex);
  }
  userSelectedToDelete(){
    this.itemSelectedToDelete.emit(this.itemIndex);
  }
}
