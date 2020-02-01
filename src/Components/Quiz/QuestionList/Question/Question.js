import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Question.scss';

function Question() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
  }, []);

  const getQuestions = () => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=20&type=multiple')
      .then((response) => {setQuestions(response.data.results)})
  }

  return(
    <div>
      <header className="card-header">
          <p className="card-header-title">questions</p>
      </header>

      <div className="card-content">
        <div className="control">
          {questions.map((question, index) => {
            return(
              <label className="radio">
                <input type="radio" name="answer"/>
                {question.question}
              </label>
            )
          })}
        </div>
      </div>

      <footer className="card-footer">
        <div className="card-footer-item"> 
          <button className="button is-primary">Suivante</button>
        </div>
      </footer>
    </div>
  )
}

export default Question;