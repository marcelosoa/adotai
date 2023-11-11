import { NavigationContext, useNavigation } from "@react-navigation/native";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { ReactNode, createContext, useState } from "react";
import React from "react";

export type formData = {
  email: string
  password: string
}

type AuthProps = {
  signIn: (data: formData) => void
  signUp: (data: formData) => void
  logout: () => void
  loading: boolean
}

type ContextProps = {
  children: ReactNode
}


export const AuthContext = createContext({} as AuthProps)


function AuthProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const navigation = React.useContext(NavigationContext);

  const signIn = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation?.navigate('Home')
    } catch (error) {
      setError(error?.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation?.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    try {
      auth.signOut()
      navigation?.navigate('Initial')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signUp,
      loading,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider