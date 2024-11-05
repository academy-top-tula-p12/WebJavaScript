import { Routes } from "@angular/router";
import { FlightsComponent } from "./flights/flights.component";
import { FlightDetailsComponent } from "./flight-details/flight-details.component";

const routeConfig: Routes = [
    {
        path: "",
        component: FlightsComponent,
        title: "Flights List"
    },
    {
        path: "flight/:id",
        component: FlightDetailsComponent,
        title: "Flight Details"
    }
];

export default routeConfig;