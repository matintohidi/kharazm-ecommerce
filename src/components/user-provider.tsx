import { User as IUser } from "@/lib/services";
import { createContext, useContext, useState } from "react";

interface User extends Omit<IUser, "password"> {}

interface UserContextType {
  user?: User;
  setUser: (user: User | undefined) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

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
