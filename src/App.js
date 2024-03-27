import './App.css';
import { GiCommercialAirplane } from "react-icons/gi";
import travelDB, {BgImage} from './Data/travelData';
import { useState } from 'react';

const countries = Object.keys(travelDB);
//console.log(countries);

function App() {
  const [city,setCity] = useState('India');
  return (
    <>
    <header>
      <div className='head'><GiCommercialAirplane />TravelWithMe</div>
    </header>
    
    <div className='hero hero-container'>
      <div className='image-container'>
        <img src={BgImage.poster2} alt='Logo'/>
      </div>
      <div className='inner-container text-container text-size'>
        Love Travelling then
        <br /> Check out the best recommendations from us for your next plan
      </div>
    </div>

    <div className='country-container'>
      {countries.map((country)=>{
        return (<div key={country} className='country-btn' onClick={()=>setCity(country)}>{country}</div>);
      })}

    </div>

    <div>
        {travelDB[city].map((item) => {
          return (
            <div className=" hero hero-container" key={item.city}>
              <div className="image-container">
                <img className="image-container" alt="City" src={item.poster} />
              </div>
              <div className="inner-container text-container">
                <span className="city">
                  <span className="heading">City : </span>
                  {item.name}
                </span>
                <span className="population">
                  <span className="heading">Population : </span>
                  {item.population} |{" "}
                  <span className="heading">Area: &nbsp;</span>
                  {item.size}`
                </span>
                <p className="city-desc">{item.fact}</p>
              </div>
            </div>
          );
        })}
      </div>

      <footer>
        {/* <div className='footer-image'>
          <img src={BgImage.poster1} alt='footer-Image'/>
        </div> */}
        <p>
          The world is a book and those who do not travel read only one page ~
          Saint Augustine
        </p>
      </footer>

    </>
  );
}

export default App;
