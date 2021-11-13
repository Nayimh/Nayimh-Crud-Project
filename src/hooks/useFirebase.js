import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup, updateProfile} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // register
    const registerUser = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
          const newUser = { email, displayName: name };
          // set user to db
          saveUser(email, name, 'POST');



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
    const destination = location?.state?.from || '/';
    history.replace(destination);
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
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

  // admin filter
  useEffect(() => {
    fetch(`https://desolate-garden-12224.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  } ,[user.email])


  // save user to db
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://desolate-garden-12224.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()

  }


    return {
        user,
        admin,
        isLoading,
        registerUser,
        logout,
        loginUser,
        authError,
        signInUsingGoogle
    }
}

export default useFirebase;