import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Booking, BookingCreate } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss']
})
export class BookingCreateComponent implements OnInit, OnDestroy {

  registerForm!: FormGroup;
  submitted = false;
  editModeItemId:number|undefined = undefined;
  @Input() user: Booking = {} as Booking;
  @Output() userChange = new EventEmitter<Booking>();
  
  constructor(
    private fb: FormBuilder,
    private userService: BookingService,
  ) {
    this.registerForm = this.fb.group({
      roomId: ['', [Validators.required]],
      clientId: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      checkIn:['', [Validators.required]],
      checkOut:['', [Validators.required]]
    }
    );
   }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['user'] && this.registerForm){
        this.registerForm.get('roomId')?.setValue(changes['user'].currentValue.roomId)
        this.registerForm.get('clientId')?.setValue(changes['user'].currentValue.clientId)
        this.registerForm.get('cost')?.setValue(changes['user'].currentValue.cost)
        this.registerForm.get('checkIn')?.setValue(changes['user'].currentValue.checkIn)
        this.registerForm.get('checkOut')?.setValue(changes['user'].currentValue.checkOut)
        this.editModeItemId = changes['user'].currentValue.id
    }
}
  ngOnInit() {
    // if(!this.editModeItemId)
    //   this.registerForm.reset();
  }
  ngOnDestroy(): void {
      
  }

saveProject(){
  this.submitted = true;
  let newProject = this.registerForm.value;
  if(this.editModeItemId){
  newProject.Id = this.editModeItemId;
    this.userService
    .update(newProject, this.editModeItemId)
    .subscribe(
      response=>{
        this.userChange.emit(newProject);
      this.registerForm.reset();
      this.editModeItemId = undefined;
      this.user = {} as Booking
      console.log(this.registerForm)
        alert("The booking was successfully updated!");
      }
    )
  }else{
    this.userService
  .create(newProject)
  .subscribe(
    response=>{
      const createdProject:Booking = response;
      this.userChange.emit(createdProject);
      this.registerForm.reset();
      this.editModeItemId = undefined;
      this.user = {} as Booking
      alert("The booking was successfully created!");
    }
  )
}
  }
  
}
