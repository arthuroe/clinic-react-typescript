import React from 'react';
import test from '../../images/test.jpg';
import './User.css'

export default function UserBar() {
  return (
    <div className="userbar-wrapper">
      <div className="name-wrapper">
        <h4>John</h4>
      </div>
      <div className="image-wrapper">
        <img src={test} alt="" />
      </div>
    </div>
  )
}
