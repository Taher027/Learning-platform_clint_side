import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
 
export const AuthContext = createContext();
const auth = getAuth(app); 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const providerLogin = () => {
        return signInWithPopup(auth, provider);
    }
    const providerLogin2 = () => {
        return signInWithPopup(auth, provider2);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
          
              
                setUser(currentUser);
            
            
          
        });

        return () => {
            unsubscribe();
        }

    }, []) 
    
    const authInfo = { 
        user, 
        providerLogin, 
        logOut, 
        updateUserProfile,
        createUser, 
        signIn ,
        providerLogin2,
        setUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;