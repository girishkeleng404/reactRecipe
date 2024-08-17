import React, { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({});
export function UserContextProvider({children}) {
    const [data, setData] = useState(()=>{
        const storedData = localStorage.getItem('recipeData');
        return storedData ? JSON.parse(storedData) : [];
    });

  useEffect(()=>{
    localStorage.setItem('recipeData', JSON.stringify(data));
  },[data])

    return (
        <UserContext.Provider value={{ data,setData }}>
            {children}
        </UserContext.Provider>
    )
}