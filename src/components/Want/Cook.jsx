import Bookmark from "../Bookmark/Bookmark";


const Cook = ({cook}) => {
    return (
        <div className="ml-96">
            <h2 className="text-4xl">Want to cook: {cook.length}</h2>
            {
                cook.map(cook => <Bookmark key={cook.id} bookmark={cook}></Bookmark>)
            }
        </div>
    );
};

export default Cook;