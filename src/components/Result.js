import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


class Result extends Component {
    constructor(props) {
       super(props);
       this.barStyle = this.barStyle.bind(this);
   }


    barStyle(num){
        switch (true) {
            case num<=40: return "success";
            case num<=60: return "info";
            case num<=80: return "warning";
            default: return "danger";
        }
    }

    render() {
        if (this.props.showResults){
            var barStyleImpostor = this.barStyle(this.props.sumPercentsImpostor);
            var barStylePFP = this.barStyle(this.props.sumPercentsPFP);
            var barStyleSFP = this.barStyle(this.props.sumPercentsSFP);
            var barStylePBP = this.barStyle(this.props.sumPercentsPBP);
            return(
            <div>
                Проявление синдрома самозванца у вас:
                <ProgressBar bsStyle={barStyleImpostor} now={this.props.sumPercentsImpostor}
                    label={this.props.sumPercentsImpostor+"%"} />
                Шкала PFP:
                <ProgressBar bsStyle={barStylePFP} now={this.props.sumPercentsPFP}
                    label={this.props.sumPercentsPFP+"%"} />
                Шкала SFP:
                <ProgressBar bsStyle={barStyleSFP} now={this.props.sumPercentsSFP}
                    label={this.props.sumPercentsSFP+"%"} />
                Шкала PBP:
                <ProgressBar bsStyle={barStylePBP} now={this.props.sumPercentsPBP}
                    label={this.props.sumPercentsPBP+"%"} />
            </div>
        );}
        else {return(null);}
    }
}

export default Result;
