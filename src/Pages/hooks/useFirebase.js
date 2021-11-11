import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authErr,setAuthErr] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = ( email, password, name, history) =>{    
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setAuthErr('');
           const newUser = {email, displayName:name};
           setUser(newUser);
           // save user in database
           saveUser(email, name, 'POST');
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
              setAuthErr('');
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
          saveUser(user.email, user.displayName, 'PUT')
          const destination = location?.state?.from || '/';
          history.replace(destination);
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
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } 
            else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;        
    },[]);

    useEffect( () =>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));          
    }

    const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch( "http://localhost:5000/users" ,{
        method:method,
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then()
      // res => res.json()
    }
    return {
        user,
        isLoading,
        token,
        admin,
        authErr,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;