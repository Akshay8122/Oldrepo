import './App.css';
import React, {useState} from "react";
import images from './component/images/images';
import Header from './component/Header';
import Navbar from './component/Navbar';

    function App () {
     const[dark, darkMode] = useState({
       background : 'white',
     })

   const darkModeHandler = () =>{
     if(dark.background === 'white'){
        darkMode ({
          background : 'gray'
        })
     }
  }

    const Items = [
    {
      id:1,
      image: images.offers,
      title :"Top Offers" 
    },
    {
      id:2,
      image: images.Grocery,
      title :"Grocery"  
    },
    {
      id:3,
      image: images.mobile,
      title :"Mobiles"  
    },
    {
      id:4,
      image: images.fashion,
      title :"Fasion"  
    },
    {
      id:5,
      image: images.laptop,
      title :"Electronics"  
    },
    {
      id:6,
      image: images.home,
      title :"Home"  
    },
    {
      id:7,
      image: images.electronics,
      title :"Aplliances"  
    },
    {
      id:8,
      image: images.travel,
      title :"Travel"  
    },
    {
      id:9,
      image: images.toy,
      title :"Toys"  
    } 
];



  return (
   <>
  <Navbar/>
   <div className='btn'>
     <button onClick={darkModeHandler}>Gray Mode</button>
   </div>

   <div className="grid-container" style = {dark}>
   {Items.map(item => <Header key = {item.id} image={item.image} title={item.title}/>)}
    </div>
    </> 
   );
}

export default App;
