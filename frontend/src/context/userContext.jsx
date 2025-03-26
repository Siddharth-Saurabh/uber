import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserDatacontext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    });

    return (
        <UserDatacontext.Provider value={{ user, setUser }}>
            {children}
        </UserDatacontext.Provider>
    );
};

export default UserContext;
