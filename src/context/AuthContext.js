import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ACTIONS_USER } from "../helpers/const";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS_USER.CHECK_USER,
        payload: user,
      });
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    authWithGoogle,
    register,
    logIn,
    logOut,
    user: state.user,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
