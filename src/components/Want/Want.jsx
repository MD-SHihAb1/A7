
import time from '../../assets/Image/Frame (5).png';
import time1 from '../../assets/Image/Frame (6).png';

import PropTypes from 'prop-types';



const Want = ({blog, handleAddToCook}) => {
    const {RecipeTitle, CoverImage, RecipeDescription, Ingredients, Ingredients1, Ingredients2, Ingredients3, Ingredients4, Ingredients5, CookTime, Calories} = blog;

    return (
        <div className='grid'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={CoverImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{RecipeTitle}</h2>
                    <p>{RecipeDescription}</p>
                    <hr />
                    <div>
                    <h2>Ingredients: </h2>
                    <hr />
                    <ul>
                    <li>1. {Ingredients}</li>
                    <li>2. {Ingredients1}</li>
                    <li>3. {Ingredients2}</li>
                    <li>4. {Ingredients3}</li>
                    <li>5. {Ingredients4}</li>
                    <li>6. {Ingredients5}</li>
                    </ul>
                    <br />
                    <hr />
                    <br />

                    
                   <div className='flex gap-12'>
                   <div className='flex gap-2'>
                        <img src={time} alt="" />
                            <span>{CookTime}</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src={time1} alt="" />
                        <span>{Calories} Calories</span>
                    </div>
                   </div>
                    

                    </div>
                    <div className="card-actions justify-end">
                    <button 
                    onClick={() => handleAddToCook(blog)} className="btn btn-primary">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Want;