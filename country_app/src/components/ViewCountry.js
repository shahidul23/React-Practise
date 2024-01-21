import React from 'react';
import style from './viewCountry.module.css';

const ViewCountry = (props) => {
  const{ name, flags, capital, area, population} = props.country;
  const handleClick = (name) =>{
    props.OnRemoveItem(name)
  }
  
  return (
    <article className={style.counrty}>
        <div>
            <img className={style.flag} src={flags.png} alt={name.common} />
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={()=>{
                handleClick(name.common)
            }}>Remove Country</button>
        </div>      
    </article>
  )
}

export default ViewCountry;
