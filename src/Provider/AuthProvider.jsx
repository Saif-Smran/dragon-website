import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.confrg';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    console.log(user)

    const CreatUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const observer = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state change', currentUser);
            setUser(currentUser)
        })

        return () => {
            observer()
        }

    }, [])

    const authData = {
        user,
        setUser,
        CreatUser,
    }

    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;