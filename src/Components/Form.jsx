const axios = require('axios');
import { useState } from 'react';
const Form = () => {
    const [userName, setUserName] = useState(" ")
    //every React event receives an event argument
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userName)
        const res = await axios.get(`https://api.github.com/users/${userName}`)
        this.props.onSubmit(res.data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter GitHub Username"
                value={userName}
                onChange={(event) => setUserName({ userName: event.target.value })} required />
            <button>Add Card</button>
        </form>
    )
}

export default Form;