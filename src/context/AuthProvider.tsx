import axios from "axios";
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
import axiosInstance from "../utils/axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserInfo | null>(null);
  const fetchToken = async () => {
    const firebaseToken = await auth.currentUser?.getIdToken();
    setToken(firebaseToken || null);
  };

  const loginWithGoolle = async () => {
    await axiosInstance.post(
      "/auth/google",
      {
        email: userData?.email,
        name: userData?.displayName,
      },
      {
        headers: {
          Authorization: "Bearer " + auth.currentUser?.getIdToken(),
        },
      }
    );
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user);
    });
  });
  // await axiosInstance.post(
  //   "/auth/google",
  //   {
  //     email: userData?.email,
  //     name: userData?.displayName,
  //   },
  //   {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   }
  // );

  const login = async () => {
    try {
      setPersistence(auth, browserSessionPersistence);
      await signInWithPopup(auth, new GoogleAuthProvider());
      await fetchToken().then(() => {
        loginWithGoolle();
      });
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
