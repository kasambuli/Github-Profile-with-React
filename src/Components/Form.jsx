import PropTypes from "prop-types";
const Form = ({ handleSubmit, setUserName }) => {
    //every React event receives an event argument
    return (
        <form>
            <input type="text" placeholder="Enter GitHub Username"
                name="userName"
                onChange={event => setUserName(event.target.value)} required />
            <button onClick={handleSubmit}>Add Card</button>
        </form>
    )
}
Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired,
};
export default Form;