import React, {Component} from 'react';

class CalculatorComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p className="body-result">{result}</p>
            </div>
    )
        ;
    }
}


export default CalculatorComponent;