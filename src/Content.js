import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState("Dave");
    
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };

    const handleClick = () => {
      console.log("You clicked it");
    };

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
    </main>
  )
}

export default Content