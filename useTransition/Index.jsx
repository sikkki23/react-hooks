import React, { useState, startTransition, useTransition } from 'react'

const Index = () => {

    const [search, setSearch] = useState('');

    const [isPending,startTranstiyion] = useTransition();

    const handleSearch = (e) => {
        startTransition(() => setSearch(e.target.value));
    console.log('Search:' , search);
    };


  return (
    <div>
        <h2>This is Use Transtition hook </h2>
        <input type="text" value={search} onChange={handleSearch}/>
        </div>
  )
}

export default Index