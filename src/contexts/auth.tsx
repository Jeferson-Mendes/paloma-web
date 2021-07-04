import React, { createContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import api from '../services/api'

interface IUser {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('Auth:user')
      const storagedToken = localStorage.getItem('Auth:token')

      if(storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));

        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
    }

    loadStorageData();
  })

  async function signIn() {

    const data = {
      username: 'jeferson@gmail.com',
      password: '123456789'
    }
    const response = await api.post('/login', data)

    console.log(response.data);

    /*setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    localStorage.setItem('Auth:user', JSON.stringify(response.user))
    localStorage.setItem('Auth:token', response.token)
  */
  }

  function signOut() {
    localStorage.clear()
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
  
};

export default AuthContext;