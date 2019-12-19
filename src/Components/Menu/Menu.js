import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'

function Menu() {
  return (
    <div className="menu">
      <div className="field">
        <label className="menu-label has-text-white">Choisi un pseudo</label>
        <div className="control">
          <input className="input is-danger is-large" type="text" placeholder="test"/>
        </div>
      </div>

      <div className="columns menu-select">
        <div className="column">
          <div class="field">
            <div class="control">
              <div class="select is-danger is-large">
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
        </div>

        <div className="column">
          <div class="field">
            <div class="control">
              <div class="select is-danger is-large">
                <select>
                  <option>Nombre de questions</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to='/menu'>
        <p className="glitch" data-text="START">START</p>
      </Link>
    </div>
  );
}

export default Menu;