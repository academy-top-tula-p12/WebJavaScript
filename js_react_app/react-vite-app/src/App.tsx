import { IFlight } from "./Types";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Aboute";

type IFlightProps = {
  flight: IFlight;
}

function FlightRow({flight}: IFlightProps){
  return(
    <tr>
      <td>{flight.title}</td>
      <td>{flight.fromCity}</td>
      <td>{flight.toCity}</td>
      <td>{flight.date.getDate()}</td>
    </tr>
  );
}


type IFlightListProps = {
  flights: IFlight[];
  searchText: string;
}

function FlightList({flights, searchText}: IFlightListProps){

  let rows: IFlight[] = [];

  if(searchText.trim().length == 0){
    rows = flights;
  }
  else{
    flights.forEach((flight) => {
      let search = searchText.trim().toLowerCase();
      if(flight.fromCity.toLowerCase().indexOf(search) !== -1)
        rows.push(flight);
    });
  }
  

  return(
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        { rows.map((r, index) => <FlightRow flight={r} key={index} />)}
      </tbody>
    </table>
  );
}


type SearchProps = {
  setSearch: CallableFunction;
}

function FlightSearch({setSearch}: SearchProps){
  return (
    <form>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
}

export default function App(){
  const [search, setSearch] = useState("");
  return(
    <div>
      <div>
        <a href="home">Home</a>    |     <a href="about">About</a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <FlightSearch setSearch={setSearch} />
      <FlightList flights={flights} searchText={search} />
    </div>
  );
}



let flights: IFlight[] = [
  { title: "ASD-123", fromCity: "Moscow", toCity: "St Peterburg", date: new Date(2025, 4, 21) },
  { title: "DFG-456", fromCity: "Moscow", toCity: "Novosibirsk", date: new Date(2025, 3, 4) },
  { title: "SDE-345", fromCity: "St Peterburg", toCity: "Moscow", date: new Date(2025, 4, 2) },
  { title: "RTE-754", fromCity: "St Peterburg", toCity: "Kazan", date: new Date(2025, 3, 15) },
  { title: "BJY-004", fromCity: "Irkutsk", toCity: "Vladivistok", date: new Date(2025, 5, 17) },
  { title: "ALO-709", fromCity: "Novosibirsk", toCity: "Mowcow", date: new Date(2025, 5, 17) },
  { title: "LIK-541", fromCity: "Novgorod", toCity: "Irkutsk", date: new Date(2025, 5, 17) },
]

