import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ profiles }) => {
    return (
        <>
            {profiles.map(profile => <Card key={profile.name} profile={profile} />)}
        </>
    )
}

CardList.propTypes = {
    profiles: PropTypes.array.isRequired,
};
export default CardList;