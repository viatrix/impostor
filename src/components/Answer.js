import React, { Component } from 'react';

let answersText = ["никогда",
                "редко",
                "иногда",
                "часто",
                "всегда"];

class Answer extends Component {
    constructor(props) {
       super(props);
       this.state = {answerSelected: "0",
                    buttonIsDisabled: false};
       this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
         this.props.processAnswer(this.state.answerSelected);
    }

  render() {
    return (
        <div>
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
            <input id="answerButton" type="button" value="Ответить"
                onClick={this.handleClick} disabled={this.props.buttonIsDisabled}/>
         </div>
    );
  }
}

export default Answer;
