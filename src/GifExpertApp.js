import React , {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);
  // const handleAdd = ()=>{
  //       //setCategories([...categories, 'Naruto']);
  //       setCategories(cats => [...cats , 'Naruto']);
  // }

  return (
    <>
      <h2>GifExpertAPP</h2>
      <AddCategory setCategories={ setCategories}/>
      <hr></hr>

      <ol>
        {categories.map( category=>
                //category =><li key={category}>{category}</li>
                <GifGrid 
                key={category}
                category={category} />
                )}
      </ol>
    </>
  );
};


