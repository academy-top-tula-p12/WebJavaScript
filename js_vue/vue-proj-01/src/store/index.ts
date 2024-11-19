import { Flight } from "../types/flight.ts";
import { defineStore } from "pinia";

interface State {
    ids: number;
    flights: Flight[];
}

export const useFlightsStore = defineStore("flights", {
    state: (): State => {
        return {
            ids: 3,
            // initial data
            flights: [
                {
                    id: "1",
                    name: "ASH-109",
                    departure: "New-York",
                    destination: "Paris"
                },
                {
                    id: "2",
                    name: "DNK-121",
                    departure: "Prague",
                    destination: "Vien"
                },
                {
                    id: "3",
                    name: "KJS-632",
                    departure: "Moscow",
                    destination: "Minsk"
                }
            ]
        }
    },
    actions: {
        addFlight(name: string, departure: string, destination: string) {
            this.$patch((state) => {
                state.flights.push({
                    id: this.ids.toString(),
                    name: name,
                    departure: departure,
                    destination: destination
                });
                state.ids++;
            })
        },
        removeFlight(id: string) {
            const index = this.flights.findIndex((flight: Flight) => flight.id === id);
            this.$patch((state) => state.flights.splice(index, 1));
        },
        editFlight(flight: Flight) {
            const index = this.flights.findIndex((flight: Flight) => flight.id === flight.id);
            this.$patch((state) => {
                state.flights[index].name = flight.name;
                state.flights[index].departure = flight.departure;
                state.flights[index].destination = flight.destination;
            })
        }
    },
    getters: {
        getFlightById: (state) => {
            return (id: string): Flight => state.flights.find(flight => flight.id === id)!;
        }
    }
})