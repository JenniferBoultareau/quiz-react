import React from 'react';

import Question from './Question/Question';

import './Quiz.scss';

function Quiz() {
  return(
    <div className="quiz">
      <p className="quiz-title has-text-white">Name here we go!</p>

      <div className="box">
        <div className="columns is-tablet">
          <div className="column">
            <p className="has-text-centered-mobile">Question 1 sur 10</p>
          </div>
          <div className="column">
            <p className="has-text-right-tablet has-text-centered-mobile">Score : 5 </p>
          </div>
        </div>

        <Question />

      </div>
    </div>
  )
}

export default Quiz;