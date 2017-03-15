import React, { Component } from 'react';
import './App.css';
import questionsImport from './questions.json';
import resultsImport from './results.json';

let answersText = ["совсем не подходит",
                "не очень подходит",
                "нейтрально",
                "в основном подходит",
                "полностью подходит"];

class App extends Component {
    constructor(props) {
       super(props);
       this.state = {answers: [],
                    answerSelected: "0",
                    questionId: 0,
                    questions: questionsImport,
                    result: "",
                    buttonIsDisabled: false};
       this.handleClick = this.handleClick.bind(this);
       this.updateResult = this.updateResult.bind(this);
     }

     updateResult() {
         var res=this.state.result;
         var lastQuestionId = this.state.answers[this.state.answers.length-1].id;
         var lastAnswerId = this.state.answers[this.state.answers.length-1].answer;
         console.log(lastQuestionId, resultsImport[0], resultsImport[lastQuestionId]);
         res += (" "+resultsImport[lastQuestionId][lastAnswerId]);
         this.setState({result: res});
     }

     handleClick() {
         var answersStore = this.state.answers;
         answersStore.push({id: this.state.questions[this.state.questionId].id, answer: this.state.answerSelected});
         this.setState({answers: answersStore});
         if (this.state.questionId < this.state.questions.length-1){
             this.setState({questionId: this.state.questionId + 1});
        }
        else {
            this.setState({buttonIsDisabled: true});
        }
         console.log(this.state.answers[this.state.answers.length-1], this.state.questionId);
         this.updateResult();
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
           <label><input name="answer" type="radio" value="0"
                    checked={this.state.answerSelected==="0"}
                    onChange={(event) => {this.setState({answerSelected: event.target.value})
                    }}/>{answersText[0]}
            </label>
            <label><input name="answer" type="radio" value="1"
                     checked={this.state.answerSelected==="1"}
                     onChange={(event) => {this.setState({answerSelected: event.target.value})
                 }}/>{answersText[1]}
             </label>
             <label><input name="answer" type="radio" value="2"
                      checked={this.state.answerSelected==="2"}
                      onChange={(event) => {this.setState({answerSelected: event.target.value})
                  }}/>{answersText[2]}
              </label>
              <label><input name="answer" type="radio" value="3"
                       checked={this.state.answerSelected==="3"}
                       onChange={(event) => {this.setState({answerSelected: event.target.value})
                   }}/>{answersText[3]}
               </label>
               <label><input name="answer" type="radio" value="4"
                        checked={this.state.answerSelected==="4"}
                        onChange={(event) => {this.setState({answerSelected: event.target.value})
                    }}/>{answersText[4]}
                </label>
           <input id="answerButton" type="button" value="Ответить" onClick={this.handleClick} disabled={this.state.buttonIsDisabled}/>
           <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}


export default App;
