import { NavLink } from "react-router-dom";

export default function Dashboard(){
  return (
    <>
      <div>
        <NavLink to="/dashboard/employees">Employee Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/dashboard/companies">Companies Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/dashboard/positions">Position Dashboard</NavLink>
      </div>
    </>
  );
}