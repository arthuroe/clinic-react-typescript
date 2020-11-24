import React from 'react';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className="sidebar-wrapper">
    <h2>Menu</h2>
        <ul>
            <li><a href="#"><i className="fa fa-address-card"></i>Home</a></li>
            <li><a href="#"><i className="fa fa-user"></i>Profile</a></li>
            <li><a href="#"><i className="fa fa-address-card"></i>About</a></li>
            <li><a href="#"><i className="fa fa-address-card"></i>portfolio</a></li>
            <li><a href="#"><i className="fa fa-address-card"></i>Blogs</a></li>
        </ul>
        <div className="social_media">
          <a href="#"><i className="fa fa-facebook-f"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
    </div>
  )
}
