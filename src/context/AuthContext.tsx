import { UserInfo } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextProps {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  token: string | null;
  userData: UserInfo | null;
}

export const AuthContext = createContext<AuthContextProps>({
  login: async () => {},
  logout: async () => {},
  token: null,
  userData: null,
});
