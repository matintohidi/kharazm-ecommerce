import { User as IUser } from "@/lib/services";
import { useAuthMe } from "@/providers/auth/authMe";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface User extends Omit<IUser, "password"> {}

interface UserContextType {
  user?: User;
  setUser: (user: User | undefined) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
