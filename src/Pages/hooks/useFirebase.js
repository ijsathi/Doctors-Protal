import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authErr,setAuthErr] = useState('');

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = ( email, password, name, history) =>{    
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setAuthErr('');
           const newUser = {email, displayName:name};
           setUser(newUser);
           // send name to firebase
           updateProfile(auth.currentUser, {
            displayName: name })
            .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
          
           history.replace('/');
          })
          .catch((error) => {
            setAuthErr( error.message);
          })
          .finally(() => setIsLoading(false));        
        }
    const loginUser = (email, password , location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setAuthErr('')
            })
            .catch((error) => {
              setAuthErr( error.message);
            })
            .finally(() => setIsLoading(false)); 
    }

      const signInWithGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
          const user = result.user;
          setAuthErr('');
        }).catch((error) => {
          setAuthErr( error.message);     
        })
        .finally(() => setIsLoading(false)); 
      }

    //  observe user state
    useEffect( () =>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;        
    },[]);

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));          
    }

    return {
        user,
        isLoading,
        authErr,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;