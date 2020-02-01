import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editName } from '../../Actions/nameAction';
import { editTheme } from '../../Actions/themeAction';
import './Menu.scss';

function Menu(props) {

  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');

  const start = () => {
    props.dispatch(editName(name));
    props.dispatch(editTheme(theme));
  }

  return (
    <div className="menu">

      <p className="description-quiz has-text-white has-text-centered is-size-6-mobile">Quiz de 10 questions</p>
      
      <div className="columns is-vcentered field">
        <div className="column is-half has-text-right has-text-centered-mobile">
          <label className="menu-label has-text-white is-size-4-mobile">Choisi un pseudo</label>
        </div>
        <div className=" column is-half has-text-centered-mobile control">
          <input 
            className="input pseudo-input is-black is-medium" 
            type="text" 
            placeholder="test"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
      </div>

      <div className="columns is-vcentered field">
        <div className="column is-half has-text-right has-text-centered-mobile">
          <label className="menu-label has-text-white is-size-4-mobile">Choisi un thème</label>
        </div>
        <div className=" column is-half control has-text-centered-mobile">
          <div className="select is-black is-medium">
            <select value = {theme} onChange={event => setTheme(event.target.value)}>
              <option>Thème du quiz</option>
              <option value="Art">Art</option>
              <option value="Géographie">Géographie</option>
              <option value="Histoire">Histoire</option>
              <option value="Mythologie">Mythologie</option>
              <option value="Politique">Politique</option>
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
        <p 
          className="glitch has-text-centered is-size-4-mobile" 
          data-text="START"
          onClick={start}
        >
          START
        </p>
      </Link>
    </div>
  );
}

export default connect()(Menu);