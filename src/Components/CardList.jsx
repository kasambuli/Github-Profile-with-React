import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ profiles }) => {
    return (
        <>
            {profiles.testData.map(profile => <Card key={profile.id} profile={profile} />)}
        </>
    )
}

CardList.propTypes = {
    profiles: PropTypes.object.isRequired,
};
export default CardList;