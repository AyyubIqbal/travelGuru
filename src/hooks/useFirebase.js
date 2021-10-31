import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import AuthenticationInitialization from '../Pages/Login/Firebase/firebase.init';

AuthenticationInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                // console.log(result.user);
                setError("")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message)
            })
    };


    return (
        {
            user,
            error,
            signInUsingGoogle,
            logOut,
            isLoading,
            setIsLoading

        }
    );
};

export default useFirebase;