import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  
  users: Booking[] = [];
  selectedProject: Booking = {} as Booking;
  selectedProjectIndex: number = -1;
  hideCreateProject: Boolean = true;
  saved:Boolean = true;

  constructor(private userService: BookingService) { }

  ngOnInit(): void {
    this.userService.get().subscribe(x => {
      this.users = x;
  }, (error) => {
      console.log(error)
  });
  }


  canDeactivate() : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
     
    if(!this.saved){
        return confirm("You may have some unsaved data. Do you want to leave the page?");
    }
    else{
        return true;
    }
}

    save(newProject: Booking){
      if(this.selectedProjectIndex === -1){
          this.users.unshift(newProject);
      } else {
          this.users[this.selectedProjectIndex] = newProject;
      }
      this.selectedProjectIndex = -1;
      this.displayCreateProject();
  }
  select(index:number) {
    this.displayCreateProject();
    let project = this.users[index];
    this.selectedProject = {
      id: project.id,
      roomId: project.roomId,
      clientId:project.clientId,
      cost:project.cost,
      checkIn: project.checkIn,
      checkOut:project.checkOut
    };
    this.selectedProjectIndex = index;
  }
  delete(index:number){
    let project = this.users[index];
    this.userService.delete(project.id)
    .subscribe(response => {
      // if(response){
        
      // }
  }, (error: any) => {
      console.log(error)
  });
  this.users.splice(index, 1);
  alert("The booking was successfully deleted!")
  }
  displayCreateProject(){
    
    this.hideCreateProject = !this.hideCreateProject;
    if(!this.hideCreateProject){
      this.saved = false;
    }else{
      this.saved = true;
    }
  }

}
