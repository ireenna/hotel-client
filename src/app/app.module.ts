import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking/booking.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingPageComponent } from './booking/booking-page/booking-page.component';
import { BookingCreateComponent } from './booking/booking-create/booking-create.component';
import { BookingService } from './services/booking.service';
import { MyDateFormatPipe } from './pipes/my-date-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingListComponent,
    BookingPageComponent,
    BookingCreateComponent,
    MyDateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        BrowserAnimationsModule,
        
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
