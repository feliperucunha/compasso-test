import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';

import Navbar from '../../../components/Navbar';

export default function DefaultLayout({ children }) {

  const { location } = useHistory()

  return (
    <div className="wrapper">
      {/* REMOVIDO PARA QUE A PROPS FUNCIONE */}
      {/* <Navbar searchTerm={location.state.userInput}/> */}
      <div className="content">
        {children} 
      </div>
    </div>
  );
}

