import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ViewCountry from './ViewCountry';
import style from './country.module.css';

const Country = (props) => {

  const { countries } = props; 
  return (
    <section className={style.countries}>
      {
        countries.map((country) =>{
            const countryNew = {country, id:uuidv4() }

            return <ViewCountry key={countryNew.id} {...countryNew} OnRemoveItem = {props.OnRemoveItems} />

        })
      }
    </section>
  )
}

export default Country;
