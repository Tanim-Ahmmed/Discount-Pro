import { createContext, useEffect, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const emailRef = useRef();

  const googleProvider = new GoogleAuthProvider();

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
   return  signInWithPopup(auth, googleProvider);
  };


  const handleResetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }

  const manageProfile = (updateData) =>{
    return  updateProfile(auth.currentUser,updateData);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    emailRef,
    setUser,
    createNewUser,
    userLogin,
    manageProfile,
    handleGoogleLogin,
    handleResetPassword,
    logOut,
    

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
