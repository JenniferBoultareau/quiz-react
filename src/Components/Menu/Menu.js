import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'

function Menu() {
  return (
    <div className="menu">

      <p className="description-quiz has-text-white has-text-centered is-size-6-mobile">Quiz de 10 questions</p>
      
      <div className="columns is-vcentered field">
        <div className="column is-half has-text-right has-text-centered-mobile">
          <label className="menu-label has-text-white is-size-4-mobile">Choisi un pseudo</label>
        </div>
        <div className=" column is-half has-text-centered-mobile control">
          <input className="input pseudo-input is-black is-medium" type="text" placeholder="test"/>
        </div>
      </div>

      <div className="columns is-vcentered field">
        <div className="column is-half has-text-right has-text-centered-mobile">
          <label className="menu-label has-text-white is-size-4-mobile">Choisi un thème</label>
        </div>
        <div className=" column is-half control has-text-centered-mobile">
          <div className="select is-black is-medium">
            <select>
              <option>Thème du quiz</option>
              <option>Art</option>
              <option>Géographie</option>
              <option>Histoire</option>
              <option>Mythologie</option>
              <option>Politique</option>
            </select>
          </div>
        </div>
      </div>

      <div className="columns is-vcentered">
        <div className="column is-half has-text-right has-text-centered-mobile">
          <label className="menu-label has-text-white is-size-4-mobile">Voir les scores</label>
        </div>
        <div className="column is-half has-text-centered-mobile">
          <button className="button is-medium is-black is-inverted">SCORE</button>
        </div>
      </div>

      <Link to='/quiz'>
        <p className="glitch has-text-centered is-size-4-mobile" data-text="START">START</p>
      </Link>
    </div>
  );
}

export default Menu;