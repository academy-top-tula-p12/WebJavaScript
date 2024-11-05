import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightingService } from '../flighting.service';
import { FlightData } from '../flight-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css'
})
export class FlightDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  flightingService: FlightingService = inject(FlightingService);
  flight: FlightData;

  constructor(){
    let id = parseInt(this.route.snapshot.params["id"], 10);

    this.flight = this.flightingService.getFlightById(id)!;
    console.log(this.flight);
    
  }
}
