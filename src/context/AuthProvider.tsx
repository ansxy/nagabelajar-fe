import {
  GoogleAuthProvider,
  UserInfo,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../utils/FirebaseUtils";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const fetchToken = async () => {
    const firebaseToken = await auth.currentUser?.getIdToken();
    setToken(firebaseToken || null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user);
      fetchToken();
    });
  }, []);

  const login = async () => {
    try {
      setPersistence(auth, browserSessionPersistence);
      await signInWithPopup(auth, new GoogleAuthProvider());
      fetchToken();
    } catch {
      setToken(null);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setToken(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ token, userData, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
