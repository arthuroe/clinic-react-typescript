import React, { FC, ReactElement } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import UserBar from '../UserBar/UserBar';
import './LayOut.css';

type ChildProps = {
  children:JSX.Element;
}

 const LayOut: FC<ChildProps> = ({children}) => {
  return(
    <div className="home-wrapper">
      <div className="top-wrapper">
        <NavBar />
      </div>
    <div className="app-main">
      <div className="side-wrapper">
        <SideBar />
      </div>
      <div className="main-content-wrapper">
        <div className="user-wrapper">
        <UserBar />
        </div>
        <div className="content-wrapper">
        {children}
        </div>
      </div>
    </div>
    </div>
  )
}

export default LayOut;