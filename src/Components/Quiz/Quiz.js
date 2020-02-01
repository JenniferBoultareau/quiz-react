import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import QuestionList from './QuestionList/QuestionList';

import './Quiz.scss';

function Quiz(props) {

  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setName(props.name.name);
    setTheme(props.theme.theme)
  }, []);

  return(
    <div className="quiz">
      <p className="quiz-title has-text-white">{name} here we go!</p>

      <div className="box">
        <div className="columns is-tablet">
          <div className="column">
            <p className="has-text-centered-mobile">Question 1 sur 10</p>
          </div>
          <div className="column">
            <p className="has-text-centered">{theme}</p>
          </div>
          <div className="column">
            <p className="has-text-right-tablet has-text-centered-mobile">Score : 5 </p>
          </div>
        </div>

        <QuestionList />

      </div>
    </div>
  )
}

const mapStateToProps = store => ({
  name: store,
  theme: store
});

export default connect(mapStateToProps)(Quiz);