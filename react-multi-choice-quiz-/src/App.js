import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      title: '',
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: 0,
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleBackSelected = this.handleBackSelected.bind(this);
  }

  componentWillMount() {
    const answerOptions = quizQuestions.map((question) => question.answers);
    this.setState({
      title: quizQuestions[0].title,
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0],
    });
  }
 
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  handleBackSelected(event) {
    if (this.state.questionId > 1) {
        setTimeout(() => this.setPreviousQuestion(), 300);
    } 
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = this.state.answersCount + parseInt(answer);

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    return this.state.answersCount;
  }

  setResults(result) {
    this.setState({ result: result });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        title={this.state.title}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        onBackSelected={this.handleBackSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome Srinivas Thota</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
