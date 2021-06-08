import '../App.scss';
import PropTypes from "prop-types";

const Card = ({ profile }) => {
    return (
        <div className="github-profile">
            <img src={profile.avatar_url} alt="Profile" />
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    );
}
Card.propTypes = {
    profile: PropTypes.string.isRequired,
};
export default Card;
