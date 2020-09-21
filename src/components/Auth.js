import { app } from '../firebase/config';
import React, { useEffect, useState } from 'react';
// import { firebaseConfig } from '../firebase/config';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [pending, setPending ] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
            // console.log(currentUser.uid);
        });
    }, [currentUser]);

    if(pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}>
                {children}
                
        </AuthContext.Provider>
    );
};
