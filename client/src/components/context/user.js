import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        fetch("/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then (r => {
            if (r.ok) {
                r.json().then(data => {
                    console.log(data)
                })
            } else {
                r.json().then(data => {
                    setError(data.error)
                })
            }
        })
   
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser,setRole, error,role }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };