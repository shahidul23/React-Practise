import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[Data, setData] = useState([]);
    const[isLoading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const fetchData = async (url) =>{
        setLoading(true);
        try {
            const Data = await fetch(url);
            const User = await Data.json();
            setData(User);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    useEffect(() =>{
        fetchData(url);
    },[url]);
    return {Data, isLoading, error}
}

export default useFetch;
