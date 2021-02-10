import Card from "./Card";
import testData from "../utils/Testdata";

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card{...profile} />)}
    </div>
    // it's returning [<Card/>,<Card/>,<Card/>] - creating a new react Card elemnt withe very iteration.
)
export default CardList;