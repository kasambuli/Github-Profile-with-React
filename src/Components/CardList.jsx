import Card from "./Card";

const CardList = (props) => (

    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>

)
// it's returning [<Card/>,<Card/>,<Card/>] - creating a new react Card elemnt withe very iteration.
export default CardList;