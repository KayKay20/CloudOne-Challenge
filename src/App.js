import React from 'react';
import './App.css';
//importing the json file ito the javaScript 
import Data from './weather.json';
//component to put each day of weather into a block section
import Block from './block.js';
import Background from './img/background.jpeg';





function App() {
  //executing all the data in the json file
  const weather = Data.list
  
  


  return (


   
    <div style = {{
      display: 'flex',
      maxWidth: '600px',
      flexWrap: 'nowrap',
      marginTop: '100px'
    }}>

    

    <h5>Cape Town Weather

    </h5>
    
       
      {/*sliced the weather data into 6 blocks for 6 */} 
      {weather.slice(0, 6).map((day, key) => (
       
        <Block weatherForDay={day} key={key}/>
        
      ))} 
      

     

    </div>




    
  );
}

export default App;
