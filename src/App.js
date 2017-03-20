import React, { Component } from 'react';
import './App.css';
import questionsImport from './data/questions.json';
import Answer from './components/Answer.js';
import Result from './components/Result.js';
import Statistics from './components/Statistics.js';
import resultsImport from './data/results.json';

class App extends Component {
    constructor(props) {
       super(props);
       this.processAnswer = this.processAnswer.bind(this);
       this.resultImpostor = this.resultImpostor.bind(this);
       this.resultParentification = this.resultParentification.bind(this);
       this.state = {answers: [],
                    answerSelected: "0",
                    questionId: 0,
                    questions: questionsImport,
                    buttonIsDisabled: false,
                    processAnswer: this.processAnswer,
                    showResults: false,
                    sumImpostor: 0,
                    sumPercentsImpostor: 0,
                    numQuestionsImpostor: 0,
                    sumPFP: 0,
                    sumPercentsPFP: 0,
                    numQuestionsPFP: 0,
                    sumSFP: 0,
                    sumPercentsSFP: 0,
                    numQuestionsSFP: 0,
                    sumPBP: 0,
                    sumPercentsPBP: 0,
                    numQuestionsPBP: 0};
     }

     resultImpostor() {
         var sum = 0, numQuestions = 0;
         for (var i=0;i<this.state.answers.length;i++){
             if (this.state.answers[i].id[0]==="a") {
                 sum += parseInt(this.state.answers[i].answer) + 1;
                 numQuestions++;
             }
         }
         this.setState({sumImpostor: sum,
                     sumPercentsImpostor: Math.round((sum/(numQuestions*5))*100),
                     numQuestionsImpostor: numQuestions});
     }

     resultParentification(){
         var sumPFP=0, sumSFP=0, sumPBP=0;
         var numQuestionsPFP=0, numQuestionsSFP=0, numQuestionsPBP=0;
         var questionId;
         for (var i=0;i<this.state.answers.length;i++){
             if (this.state.answers[i].id[0]==="b") {
                 questionId = this.state.answers[i].id.substring(1);
                 if (resultsImport.PFP.indexOf(parseInt(questionId))>-1){
                     sumPFP += parseInt(this.state.answers[i].answer) + 1;
                     numQuestionsPFP++;
                 }
                 else if (resultsImport.SFP.indexOf(parseInt(questionId))>-1) {
                     sumSFP += parseInt(this.state.answers[i].answer) + 1;
                     numQuestionsSFP++;
                 }
                 else if (resultsImport.PBP.indexOf(parseInt(questionId))>-1) {
                     sumPBP += parseInt(this.state.answers[i].answer) + 1;
                     numQuestionsPBP++;
                 }
             }
         }
         this.setState({sumPFP: sumPFP,
                     sumPercentsPFP: Math.round((sumPFP/(numQuestionsPFP*5))*100),
                     numQuestionsPFP: numQuestionsPFP,
                     sumSFP: sumSFP,
                     sumPercentsSFP: Math.round((sumSFP/(numQuestionsSFP*5))*100),
                     numQuestionsSFP: numQuestionsSFP,
                     sumPBP: sumPBP,
                     sumPercentsPBP: Math.round((sumPBP/(numQuestionsPBP*5))*100),
                     numQuestionsPBP: numQuestionsPBP});
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
        this.resultImpostor();
        this.resultParentification();
     }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Вопрос {this.state.questionId+1} из {this.state.questions.length}</h2>
          Выбирайте наиболее близкий вам вариант ответа
        </div>
        <div className="col-md-8">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <div className="App-intro">
                <div id="questionPlace">
                    {this.state.questions[this.state.questionId].text}
               </div>
               <Answer processAnswer={this.state.processAnswer} buttonIsDisabled={this.state.buttonIsDisabled}/>
               <input id="showResultsButton" type="button"
                    value={this.state.showResults?"Спрятать результаты":"Показать результаты"}
                    onClick={() => {this.setState({showResults: !this.state.showResults});}}/>
               <Result sumPercentsImpostor={this.state.sumPercentsImpostor}
                    sumPercentsPFP={this.state.sumPercentsPFP}
                    sumPercentsSFP={this.state.sumPercentsSFP}
                    sumPercentsPBP={this.state.sumPercentsPBP}
                    showResults={this.state.showResults}/>
            </div>
            </div>
        </div>
       <div className="col-md-3 slim">
            <Statistics/>
        </div>
      </div>
    );
  }
}

export default App;
