import React from 'react'
import  HomePage  from './components/homepage/HomePage';
 

const page = async () => {
    const res = await fetch('http://localhost:3000/items.json');
  const items = await res.json();

  return (
    <HomePage items={items} />
  )
}

export default page