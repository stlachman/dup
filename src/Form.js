import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            repetition: '',
            rep: ''
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
        const {name, job, repetition, rpe } = this.state;
        return (
            <form>
                <label>Exercise</label>
                <input 
                    type="text"
                    name="name"
                    value={name}            
                    onChange={this.handleChange}  />
                <label>Weight</label>
                <input 
                    type="text"
                    name="job"
                    value={job}
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
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;