import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, getIdToken, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    //start sign up
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            //save user to the database
            saveUser(email, name, 'POST');

            //update profile
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });            
            //end update profile

            const destination = location?.state?.from || '/';
            history.replace(destination);
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));
    }
    //end sign up

    //start email/password sign in
    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=>setIsLoading(false));
    }
    //end email/password sign in

    //start google sign in
    const signInWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
          const destination = location?.state?.from || '/';
          history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
    }
    //end google sign in

    //observer user state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                //console.log(idToken)
                setToken(idToken);
              })
            } else {
              setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
          })
          .finally(()=>setIsLoading(false));
    }

    //save register user 
    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    useEffect(() => {
    const url = `http://localhost:5000/users/${user.email}`
     fetch(url)
      .then(res=>res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])


    return{
        user,
        admin,
        isLoading,
        authError,
        token,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;