import React, { Component } from 'react';
import { increment } from '../actionCreators/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SecondCounter extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.counterValue}</h2>
                <button onClick={() => this.handleIncrement(2)} >Increment</button>
            </div>
        );
    }

    handleIncrement = (id) => {
        this.props.increment(id);
    }
}

export default withRouter(connect((state) => {
    return {
        counterValue: state.secondCounter
    }
}, { increment })(SecondCounter));