import React, { useState } from "react";
import useFetch from "../customHook/useFetch";

const Index = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  //    console.log(data, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error:{error}</p>;
  if (!data || data.length === 0) return <p>No data found</p>;
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default Index;
