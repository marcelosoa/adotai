import { useNavigation } from "@react-navigation/native";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { ReactNode, createContext, useState } from "react";

export type formData = {
  email: string
  password: string
}

type AuthProps = {
  signIn: (data: formData) => void
  signUp: (data: formData) => void
  logout: () => void
}

type ContextProps = {
  children: ReactNode
}


export const AuthContext = createContext({} as AuthProps)


function AuthProvider({ children }: ContextProps) {
  const navigation = useNavigation()
  const [user, setUser] = useState<User | null>(null);

  const signIn = async ({ email, password }: formData) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(error)
    }
    navigation.navigate('Login')
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signUp,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider