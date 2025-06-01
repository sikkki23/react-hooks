import React, { useState,useEffect } from 'react'


const useFetch = (url) => {
const [data , setData] = useState(null);
const [loading , setLoading] = useState(null);
const [error , setError] = useState(null);


useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try { 
            const response = await fetch(url);
            if(!response.ok) 
                throw new Error("Failed to fetchData"); 
            
            const result = await response.json();
            console.log("result",result);
            setData(result);
            setError(null);
        } catch(error) {
                setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };
    fetchData();
} ,[url])

  return {data, loading, error};
}

export default useFetch