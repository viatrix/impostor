import React, { Component } from 'react';
import resultsImport from '../data/results.json';

class Result extends Component {

  render() {
      var res="";
      var lastQuestionId, lastAnswerId;
      for (var i=0;i<this.props.answers.length;i++){
          lastQuestionId = this.props.answers[i].id;
          lastAnswerId = this.props.answers[i].answer;
          res += (" "+resultsImport[lastQuestionId][lastAnswerId]);
      }
     if (this.props.showResults){
     return(
        <div>
         {res}
        </div>
    );}
    else {return(null);}
  }
}

export default Result;
