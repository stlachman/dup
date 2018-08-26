import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            exercise: '',
            weight: '',
            repetitions: '',
            sets: '',
            rpe: '',
            'topset': '',
            'rating': ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {exercise, weight, sets, repetition, rpe, topset, rating } = this.state;
        return (
            <form>
                <label>Exercise</label>
                <input 
                    type="text"
                    name="exercise"
                    value={exercise}            
                    onChange={this.handleChange}  />
                <label>Weight</label>
                <input 
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={this.handleChange}/>
                <label>Sets</label>
                <input 
                    type="text"
                    name="sets"
                    value={sets}
                    onChange={this.handleChange}/>
                <label>Repetition</label>
                <input 
                    type="text"
                    name="repetition"
                    value={repetition}
                    onChange={this.handleChange}/>
                <label>RPE</label>
                <input 
                    type="text"
                    name="rpe"
                    value={rpe}
                    onChange={this.handleChange}/>
                <label>Top Set</label>
                <input 
                    type="text"
                    name="topset"
                    value={topset}
                    onChange={this.handleChange}/>
                <label>Rating</label>
                <input 
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={this.handleChange}/>
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;