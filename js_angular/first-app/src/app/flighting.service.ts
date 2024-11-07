import { Injectable } from '@angular/core';
import { FlightData } from './flight-data';

@Injectable({
  providedIn: 'root'
})

export class FlightingService {
  url = "http://localhost:4200/";

  constructor() { }

  getIdCounter(){
    let count = 0;
    function inner(){
      return ++count;
    }
    return inner;
  }

  getId: any = this.getIdCounter();

  getFlightsAll(): FlightData[]{
    return this.flightsList;
  }

  getFlightById(id: number): FlightData | undefined{
    return this.flightsList.find(f => f.id == id);
  }

  pushFlight(flight: FlightData): void{
    this.flightsList.push(flight);
  }

  flightsList: FlightData[] = [
    {
      id: this.getId(),
      name: "ASD-098",
      fromCity: "Moscow",
      toCity: "Irkutsk",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 12, 5),
      isActive: true
    },
    {
      id: this.getId(),
      name: "DFG-111",
      fromCity: "St Peterburg",
      toCity: "Kazan",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 11, 21),
      isActive: true
    },
    {
      id: this.getId(),
      name: "RT-665",
      fromCity: "Voroneg",
      toCity: "Tumen",
      planeUrl: "/airplanes/boeing-737-01.jpg",
      date: new Date(2024, 11, 10),
      isActive: true
    }
  ];
}
