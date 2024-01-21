import { useEffect, useState } from 'react'

const useFetchig = (url) => {
    const[data, setData] = useState([]);
    const[isloading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    
    useEffect(()=>{
        fetch(url)
        .then(async(res)=>{
            if (!res.ok) {
                throw Error("Fetching is not successful");
            }
            return await res.json();
        })
        .then((data) =>{
            setData(data);
            setLoading(false);
            setError(null)
        })
        .catch((error) =>{
            setLoading(false);
            setError(error.message);
            
        })

        

    // try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setData(json);
    //     setLoading(false);
    //     setError(null);
    // } catch (error) {
    //     setLoading(false);
    //     setError(error);
    // }
    },[url]);


    // useEffect(()=>{
    //     await fetch(url)
    //     .then((res) =>{
    //         if(!res.ok){
    //             throw Error("Fetching is not successful")
    //         }
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         setData(data);
    //         isloading(false);
    //         setError(null);
    //     })
    //     .catch((error)=>{
    //         setError(error.message);
    //         setLoading(false)
    //     })
    // },[url]);

    return {data, isloading, error}

}

export default useFetchig;
