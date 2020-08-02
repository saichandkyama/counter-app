import React, { Component } from 'react'
import './Counter.css'
import propTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div>
                    <button class="reset" onClick={this.reset}>RESET</button>
                </div>
            </div>
        );
    }
    reset() {
        this.setState(
            { counter: 0 }
        );
    }
    increment(by) { // update the state - counter ++
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }
    decrement(by) { // update the state - counter ++
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }
}

class CounterButton extends Component {

    // Define the intial state in a constructor
    //state=>0
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    // }

    render() {
        return (
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
    // increment() { // update the state - counter ++
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);
    // }
    // decrement() { // update the state - counter ++
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });
    //     this.props.decrementMethod(this.props.by);
    // }


}
// making default increment is by 1 so need to mention as +1 for the button which we want to increment by 1
CounterButton.defaultProps = {
    by: 1
}
// Fixing the type as integer for the increment 
CounterButton.propTypes = {
    by: propTypes.number
}



export default Counter