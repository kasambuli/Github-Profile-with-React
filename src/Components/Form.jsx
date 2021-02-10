import React, { Component } from "react";
const axios = require('axios');
class Form extends Component {
    state = {
        userName: ''
    }
    //every React event receives an event argument
    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(res.data)
        this.setState({ userName: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter GitHub Username"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })} required />
                <button>Add Card</button>
            </form>
        )
        //ref attribute used to get a reference to the element. Fancy ID that react keeps in memory and assocites with every rendered element. To use ref, we need to instatiate an object
    }
}
export default Form;