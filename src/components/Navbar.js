// import './App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



 
export default function PolytopiaNavbar() {
  
 
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Polytopia Battle Calculator</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      {/* <li><NavLink to="/" end>Sinlge Battle</NavLink></li>
      <li><NavLink to="multibattle" end>Multi Battle</NavLink></li> */}
 

    </ul>
  </div>
</div>
  );
}