import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [authError, setAutuError] = useState('');

    const auth = getAuth();
    // register
    const registerUser = (email, password) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
            setAutuError('');
           
          })
          .catch((error) => {
           
            setAutuError(error.message);
           
          })
            .finally(()=> setIsloading(false));
    }

// signin with email and password 
    const loginUser = (email, password) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    setAutuError('');
  })
  .catch((error) => {
  
    setAutuError(error.message);
  })
  .finally(()=> setIsloading(false));
    }


    // observer
    useEffect(() => {
     const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
       
                setUser(user);
            } else {
                setUser({});
         }
         setIsloading(false);
          })
        return () => unsubscribe;
    }, [auth]);



    // logout
    const logout = () => {
        setIsloading(true);
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(()=> setIsloading(false));
          
    }

    return {
        user,
        isLoading,
        registerUser,
        logout,
        loginUser,
        authError
    }
}

export default useFirebase;