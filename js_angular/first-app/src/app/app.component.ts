import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { FlightAddComponent } from './flight-add/flight-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlightsComponent,
            FlightAddComponent,
            RouterModule
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
