import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightData } from '../flight-data';

@Component({
  selector: 'app-flight-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-item.component.html',
  styleUrl: './flight-item.component.css'
})
export class FlightItemComponent {
  @Input() flightItem!: FlightData;
}
