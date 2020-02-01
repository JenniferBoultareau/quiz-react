import axios from 'axios';

const getQuestions = () => {
  axios
      .get('https://opentdb.com/api.php?amount=10&category=20&type=multiple')
      .then((response) => (response.data.results))
}

const decodeHTML = (html) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

const formatChoices = choices => {
  return choices.map((choice, index) => {
      return { text: decodeHTML(choice.trim()) }
  })
}
const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

const formatQuestion = (question, index) => {
  return {
      id: index,
      text: decodeHTML(question.question.trim()),
      choices: formatChoices(combineAllChoices(question)),
      correct: decodeHTML(question.correct_answer.trim()),
      incorrect: question.incorrect_answers
  }
}

const formatAPIQuizData = questions => {
  return questions.map((question, index) => {
    return formatQuestion(question, index)
  })
}

const quizData = () => {
  const questions = getQuestions()
  const formattedQuestions = formatAPIQuizData(questions)
  return formattedQuestions;
}

export { quizData }