import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputComponent } from "@/components/input";
import { ButtonComponent } from "@/components/button";
import { useNavigation, NavigationContext } from "@react-navigation/native";
import { useContext, useState,  } from "react";
import { AuthContext, formData } from "@/context/useAuthContext";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { NavigationProps } from "@/types/types";
import { useTogglePassword } from "@/hooks/useTogglePassword";

export function Login() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading]  = useState<boolean>(false)
  const navigation = useContext(NavigationContext);
  const { togglePassword, visibility } = useTogglePassword()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      navigation?.navigate('Main')
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="bg-background flex-1 items-center justify-center">
      <InputComponent
        disabled={false}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        secureTextEntry={false}
        startIcon={<MaterialCommunityIcons name="email-outline" size={20} />}
      />

      <InputComponent
        disabled={false}
        secureTextEntry={visibility}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        placeholderTextColor="#000"
        value={password}
        endIcon={ visibility ? (
          <MaterialCommunityIcons name="eye-outline" size={20} onPress={togglePassword}/>
        ) :
        <MaterialCommunityIcons name="eye-off-outline" size={20} onPress={togglePassword}/>
      }
      />

        <View className="flex flex-row justify-between items-end w-full p-3">
          <TouchableOpacity onPress={() => navigation?.navigate('Register')}>
            <Text className="text-text">Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation?.navigate('Recovery')}>
            <Text className="text-text">Perdeu Acesso?</Text>
          </TouchableOpacity>
        </View>

      {loading ? (
        <ActivityIndicator color={"#000"} size={"small"} />
      ) : (
        <ButtonComponent onPress={() => signIn({email, password})}>
          <Text className="text-white">Conectar</Text>
        </ButtonComponent>
      )}
    </View>
  );
}
