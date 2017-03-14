import React, { Component } from 'react';
import './App.css';
import questions from './questions.json';

let answersText = ["совсем не подходит",
                "не очень подходит",
                "нейтрально",
                "в основном подходит",
                "полностью подходит"];

class App extends Component {
    constructor(props) {
       super(props);
       this.state = {answers: [], answerSelected: "0"};
       this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
         var answersStore = this.state.answers;
         answersStore.push({id: "a1", answer: this.state.answerSelected});
         this.setState({answers: answersStore});
         console.log(this.state.answers[this.state.answers.length-1]);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Выбирайте наиболее близкий вам вариант ответа
          <h2>Вопрос</h2>
        </div>
        <p className="App-intro">
           {questions[1].text}
           <label><input name="answer" type="radio" value = "0"
                    checked={this.state.answerSelected === "0"}
                    onChange={(event) => {this.setState({answerSelected: event.target.value})
                    }}/>{answersText[0]}
            </label>
            <label><input name="answer" type="radio" value = "1"
                     checked={this.state.answerSelected === "1"}
                     onChange={(event) => {this.setState({answerSelected: event.target.value})
                 }}/>{answersText[1]}
             </label>
             <label><input name="answer" type="radio" value = "2"
                      checked={this.state.answerSelected === "2"}
                      onChange={(event) => {this.setState({answerSelected: event.target.value})
                  }}/>{answersText[2]}
              </label>
              <label><input name="answer" type="radio" value = "3"
                       checked={this.state.answerSelected === "3"}
                       onChange={(event) => {this.setState({answerSelected: event.target.value})
                   }}/>{answersText[3]}
               </label>
               <label><input name="answer" type="radio" value = "4"
                        checked={this.state.answerSelected === "4"}
                        onChange={(event) => {this.setState({answerSelected: event.target.value})
                    }}/>{answersText[4]}
                </label>
           <input id="answerButton" type="button" value="Ответить" onClick={this.handleClick}/>
        </p>
      </div>
    );
  }
}


export default App;

