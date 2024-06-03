import {
  GoogleAuthProvider,
  UserInfo,
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../utils/FirebaseUtils";
import axiosInstance from "../utils/axios";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserInfo | null>(null);

  const fetchToken = async () => {
    const firebaseToken = await auth.currentUser?.getIdToken();
    localStorage.setItem("token", firebaseToken || "");
    setToken(firebaseToken || null);
  };

  const loginWithGoogle = async (userToken: string | null, user: UserInfo) => {
    try {
      await axiosInstance.post(
        "/auth/google",
        {
          email: user.email,
          name: user.displayName,
        },
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
        fetchToken();
      } else {
        setUserData(null);
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const userToken = await result.user.getIdToken();
      setToken(userToken);
      setUserData(result.user);
      await loginWithGoogle(userToken, result.user);
    } catch (error) {
      console.error("Error during login:", error);
      setToken(null);
      setUserData(null);
    }
  };

  const logout = async () => {
    await auth.signOut();
    localStorage.removeItem("token");
    setToken(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ token, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
