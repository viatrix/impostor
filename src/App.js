import React, { Component } from 'react';
import './App.css';
import questionsImport from './data/questions.json';
import Answer from './components/Answer.js';
import Result from './components/Result.js';

class App extends Component {
    constructor(props) {
       super(props);
       this.processAnswer = this.processAnswer.bind(this);
       this.state = {answers: [],
                    answerSelected: "0",
                    questionId: 0,
                    questions: questionsImport,
                    buttonIsDisabled: false,
                    processAnswer: this.processAnswer};
     }



     processAnswer(selection){
         var answersStore = this.state.answers;
         answersStore.push({id: this.state.questions[this.state.questionId].id, answer: selection});
         this.setState({answers: answersStore});
         if (this.state.questionId < this.state.questions.length-1){
             this.setState({questionId: this.state.questionId + 1});
        }
        else {
            this.setState({buttonIsDisabled: true});
        }
     }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Выбирайте наиболее близкий вам вариант ответа
          <h2>Вопрос</h2>
        </div>
        <div className="App-intro">
            <div id="questionPlace">
                {this.state.questions[this.state.questionId].text}
           </div>
           <Answer processAnswer={this.state.processAnswer} buttonIsDisabled={this.state.buttonIsDisabled}/>
           <Result answers={this.state.answers}/>
        </div>
      </div>
    );
  }
}

export default App;
