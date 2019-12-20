import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <p className="home-title is-size-2-mobile">Who want's to play ?</p>
      <Link to='/menu'>
        <p className="glitch is-size-4-mobile" data-text="PLAY NOW">PLAY NOW</p>
      </Link>
    </div>
  );
}

export default Home;