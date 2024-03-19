

const Bookmark = ({bookmark}) => {
    const {RecipeTitle, CookTime, Calories} = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{RecipeTitle}</h3>
           <h3>{CookTime}</h3>
           <h3>{Calories} Calories</h3>
        </div>
    );
};

export default Bookmark;