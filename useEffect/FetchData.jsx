import React, { useEffect } from 'react'

const FetchData = () => {
    
    useEffect(() => {
      const fetchApi = async () => {
        const apires = await fetch('https://jsonplaceholder.typicode.com/posts');  
        const data = await apires.json();
        console.log(data);
    };
      fetchApi();
    }, []);
    
  return (
    <div>FetchData</div>
  )
};

export default FetchData