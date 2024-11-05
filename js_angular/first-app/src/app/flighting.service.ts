import { Injectable } from '@angular/core';
import { FlightData } from './flight-data';

@Injectable({
  providedIn: 'root'
})
export class FlightingService {
  url = "http://localhost:4200/";

  constructor() { }

  getFlightsAll(): FlightData[]{
    return this.flightsList;
  }

  getFlightById(id: number): FlightData | undefined{
    return this.flightsList.find(f => f.id == id);
  }

  flightsList: FlightData[] = [
    {
      id: 1,
      name: "ASD-098",
      fromCity: "Moscow",
      toCity: "Irkutsk",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 12, 5),
      isActive: true
    },
    {
      id: 2,
      name: "DFG-111",
      fromCity: "St Peterburg",
      toCity: "Kazan",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 11, 21),
      isActive: true
    },
    {
      id: 3,
      name: "RT-665",
      fromCity: "Voroneg",
      toCity: "Tumen",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 11, 10),
      isActive: true
    }
  ];
}
