import React, { useEffect, useState } from 'react';
import Country from './Country';
import Search from './Search';


const url = "https://restcountries.com/v3.1/all";
const Index = () => {
    const[data, setData] = useState([]);
    const[isloading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const [filterCountries, setCountries] = useState(data);
     
    const fetchData = async (url) =>{
        setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setCountries(json);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() =>{
        fetchData(url);
    },[]);

    const handleRemove = (name) =>{
        const AllCountry = filterCountries.filter((Country) => {
            return Country.name.common !== name
        });
        setCountries(AllCountry);
    }

    // const handleSearchItem = (searchText) => {
    //     const value = searchText.toLowerCase();
        
    //     const allSearch = data.filter((item) => {
    //         const countryName = item.name.common.toLowerCase().includes(value);
    //         const countryPopulation = item.population.toString().includes(value);
    //         const countryCapital = item.capital.toLowerCase().includes(value);
    //         const countryArea = item.area.toString().includes(value);
    
    //         return countryName || countryPopulation || countryCapital || countryArea;
    //     });
    
    //     setCountries(allSearch);
    // }
    const handleSearchItem = (searchText) => {
        const value = searchText.toLowerCase();
        
        const allSearch = data.filter((item) => {
            const countryName = item.name.common.toLowerCase().includes(value);
            const countryPopulation = item.population.toString().includes(value);
            const countryCapital = typeof item.capital === 'string' && item.capital.toLowerCase().includes(value);
            const countryArea = item.area.toString().includes(value);
    
            return countryName || countryPopulation || countryCapital || countryArea;
        });
    
        setCountries(allSearch);
    }
    
    return (
        <div>
        <h1>Country App</h1>
        <Search OnItemsSearch = {handleSearchItem}/>
        {isloading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {data && <Country countries = {filterCountries} OnRemoveItems= {handleRemove}/>}
        </div>
    )
}

export default Index;
