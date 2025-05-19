import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const authData = {
        signUpUser
    }

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;