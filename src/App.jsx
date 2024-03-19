import { useState } from 'react'
import Blogs from '../public/blogs/Blogs'
import './App.css'
import Header from './components/HEADER/Header'
import Want from './components/Want/Want';
import Cook from './components/Want/Cook';


function App() {

  const [cook, setCook] = useState([]);

  const handleAddToCook = blog =>{
    const newCook = [...cook, blog];
    setCook(newCook);
  }

  return (
    <>
      <Header></Header>
      <br />
      <br />
      <br />
      <div>
        <h1 className='text-5xl text-center'>Our Recipes</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <div className='flex gap-72'>
      <Blogs handleAddToCook={handleAddToCook}></Blogs>

        <Cook cook={cook}></Cook>
        
      </div>
      
    </>
  )
}

export default App
