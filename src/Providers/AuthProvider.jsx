import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setuser] = useState([]);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateprofile = (name, photo, phone) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, phoneNumber: phone
        });
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            console.log('current user: ', currentUser);
            if (currentUser) {
                // get token and store client
                console.log(currentUser.email);
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    } , [])


    const info = {
        user,
        loading,
        createuser,
        signIn,
        googleSignIn,
        logOut,
        updateprofile,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;