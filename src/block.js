import React from 'react';

export default (props) => {

    const today = props.weatherForDay
    const main = today.main
    const weather = today.weather[0]


   

    return (
          <section>
        <div style={{
            display:'flex',
            flexDirection: 'column',
            padding:'25px',
            maxWidth: '180px',
            maxHeight:'200px',
    
        }}>


          
            <div>
                <p className="weather__key "> Conditions : 
                <span className="weather__value "> {weather.description} </span>
            </p> 
            </div>

             <div>
                <p className="weather__key "> Humidity : 
                <span className="weather__value "> {main.humidity} </span>
            </p>
            </div>
            
            <div>
                {main.temp_max}/{main.temp_min}
            </div>
            

           

        </div>
        </section>
    )
}