import PropTypes from "prop-types";
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

const Form = ({ handleSubmit, setUserName }) => {
    //every React event receives an event argument
    const changeHandler = event => {
        setUserName(event.target.value)
    }
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
        , []);

    return (
        <form>
            <input type="text" placeholder="Enter GitHub Username"
                name="userName"
                onChange={debouncedChangeHandler} required />
            <button onClick={handleSubmit}>Add Card</button>
        </form>
    )
}
Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired,
};
export default Form;