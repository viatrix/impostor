import React, { Component } from 'react';
import '../App.css';
import {ButtonGroup, Button} from 'react-bootstrap'

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
        <ButtonGroup className="answerPlace">
            <Button onClick={(event) =>{this.props.processAnswer("0");}}
                disabled={this.props.buttonIsDisabled}>
                {answersText[0]}</Button>
            <Button onClick={(event) =>{this.props.processAnswer("1");}}
                disabled={this.props.buttonIsDisabled}>
                {answersText[1]}</Button>
            <Button onClick={(event) =>{this.props.processAnswer("2");
                    event.target.removeClass('active');}}
                disabled={this.props.buttonIsDisabled}>
                {answersText[2]}</Button>
            <Button onClick={(event) =>{this.props.processAnswer("3");}}
                disabled={this.props.buttonIsDisabled}>
                {answersText[3]}</Button>
            <Button onClick={(event) =>{this.props.processAnswer("4");}}
                disabled={this.props.buttonIsDisabled}>
                {answersText[4]}</Button>
        </ButtonGroup>
      );
  }

  render_old() {
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
