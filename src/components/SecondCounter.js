import React, { Component } from 'react';
import { increment } from '../actionCreators/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SecondCounter extends Component {
    render() {
        const { ownProps } = this.props;
        console.log('ownProps', ownProps);
        return(
            <div>
                <h2>{this.props.counterValue}</h2>
                <button onClick={() => this.handleIncrement(2)} >Increment</button>
            </div>
        );
    }

    handleIncrement = (id) => {
        this.props.increment(id);
        this.props.ownProps.history.push("/firstCounter");
    }
}

export default withRouter(connect((state, ownProps) => {
    return {
        counterValue: state.secondCounter,
        ownProps: ownProps
    }
}, { increment })(SecondCounter));