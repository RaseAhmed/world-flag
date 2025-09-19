import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handelVisitedCountries, handelVisitedFlag}) => {
    const [visited, setVisited] = useState(false)
//    console.log(country.flags.flags)
const handelVisited =()=>{
    setVisited(!visited)
    handelVisitedCountries(country)

}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h3>Population : {country.population.population}</h3>
            <h3>Capital : {country.capital.capital}</h3>
            <h3>Currency : {country?.currencies?.currencies?.JMD?.name}</h3>
            <p>Area :{country.area.area}{
                country.area.area>300000 ? " Big Country" :' Small Country'
                }</p>
            <button onClick={handelVisited}>
                { visited ?'Visited' :'not Visited' }
            </button>
            <button onClick={()=>{ handelVisitedFlag(country.flags.flags.png)}}> add visited Flag</button>
        </div>
    );
};

export default Country;