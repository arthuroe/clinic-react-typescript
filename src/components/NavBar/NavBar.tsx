import React from 'react';
import Header from '../Header/Header'
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="menu-icon">
      <i className="fa 2x fa-bars"></i>
      </div>
      <div className="navbar-header">
      <Header />
      </div>
    </div>
  );
}
