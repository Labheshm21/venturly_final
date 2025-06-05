import { createContext, useState, useContext, ReactNode } from 'react';

type UserType = 'investor' | 'startup' | null;

interface UserContextType {
  userType: UserType;
  isAuthenticated: boolean;
  userId: string | null;
  setUserType: (type: UserType) => void;
  login: (id: string, type: UserType) => void;
  logout: () => void;
}

const defaultContext: UserContextType = {
  userType: null,
  isAuthenticated: false,
  userId: null,
  setUserType: () => {},
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<UserContextType>(defaultContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const login = (id: string, type: UserType) => {
    setUserId(id);
    setUserType(type);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserId(null);
    setUserType(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        userType,
        isAuthenticated,
        userId,
        setUserType,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};