import React from 'react';
import './Question.scss';

function Question() {
  return(
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Component</p>
        </header>

        <div className="card-content">
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer"/>
              Yes
            </label>
            </div>
        </div>
        
        <footer className="card-footer">
          <div className="card-footer-item"> 
            <button className="button is-primary">Suivante</button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Question;