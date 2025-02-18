import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/pages/front/Content';
import Dashboard from '@/pages/dashboard/Dashboard';

import EmployeesDashboard from '@/pages/dashboard/employees/EmployeesDashboard';
import CompaniesDashboard from '@/pages/dashboard/companies/CompaniesDashboard';
import PositionsDashboard from '@/pages/dashboard/positions/PositionsDashboard';

import { menuMain } from '@/store/data/ServiceData';


function App() {
  
  let menuList = menuMain;

  return (
    <>
      <BrowserRouter>
        <Header menuMain={menuList} />
        <Routes>
          <Route path="/">
            <Route path="" element={<Content/>}/>
          </Route>
          
          <Route path="/dashboard">
            <Route path="" element={<Dashboard/>}/>
            <Route path="employees" element={<EmployeesDashboard/>}/>
            <Route path="companies" element={<CompaniesDashboard/>}/>
            <Route path="positions" element={<PositionsDashboard/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}

export default App


{/*  */}
