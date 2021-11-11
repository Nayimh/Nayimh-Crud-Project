import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup, updateProfile} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // register
    const registerUser = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });

            setUser(newUser);

            history.replace('/');
           
          })
          .catch((error) => {
           
            setAuthError(error.message);
           
          })
            .finally(()=> setIsloading(false));
    }

// signin with email and password 
    const loginUser = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
      const destination = location?.state?.from || '/';
      history.replace(destination);

      
      
    setAuthError('');
  })
  .catch((error) => {
  
    setAuthError(error.message);
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

    // GoogleSignin
    const signInUsingGoogle = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    
   const user = result.user;
   setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=> setIsloading(false));
    }




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
        authError,
        signInUsingGoogle
    }
}

export default useFirebase;