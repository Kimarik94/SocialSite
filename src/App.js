import React from 'react';

import './App.css';
import '../src/Style/Header.css'
import '../src/Style/Navigation.css'
import '../src/Style/Profile.css'

import Header from './Components/Header.jsx';
import Navigation from './Components/Navigation.jsx';
import Profile from './Components/Profile.jsx';

const App = () => {
      return (
      <div className='MainPage'>
        <Header />
        <div className='Nav_Prof'>
          <Navigation/>
          <Profile/>
        </div>
      </div>
  );  
}

export default App;
