import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <p className="home-title">Who want's to play ?</p>
      <Link to='/menu'>
        <p className="glitch" data-text="PLAY NOW">PLAY NOW</p>
      </Link>
    </div>
  );
}

export default Home;